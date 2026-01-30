# 🏗️ Puente Data Architecture Strategy

> **Context**: Super-App MVP (Remesas P2P) on Celo + Supabase.
> **Goal**: Define how we ingest, store, and serve data for speed, reliability, and scale.
> **Based on**: Modern Data Architectures Analysis (Warehouse, Lake, Mesh, Fabric, etc.)

---

## 1. Landscape Analysis (The Options)

Based on the industry standards, we evaluated the following architectures for Puente:

| Architecture       | Fit for Puente | Why?                                                                                                                                          |
| :----------------- | :------------- | :-------------------------------------------------------------------------------------------------------------------------------------------- |
| **Data Warehouse** | ⭐⭐⭐         | **High Fit**. We need structured, ACID-compliant data for user balances/profiles. Supabase (Postgres) is our "Live Warehouse".                |
| **Data Lake**      | ⭐             | **Low Fit**. We don't have massive unstructured data (logs/IoT) yet. Accessing raw JSON files is too slow for a P2P payments UI.              |
| **Lambda**         | ⭐⭐           | **Medium Fit**. Managing two layers (Batch + Speed) is too complex for a lean team.                                                           |
| **Kappa**          | ⭐⭐           | **Good for future**. Processing everything as a stream is "Crypto-native", but complex to implement from day 0 without indexers.              |
| **Event-Driven**   | ⭐⭐⭐⭐       | **Perfect Fit**. Blockchain _is_ events. User actions _are_ events. Our system must react to them (e.g., "Tx Confirmed" -> "Update Balance"). |
| **Lakehouse/Mesh** | ⭐             | **Overkill**. We are a single domain right now. "Data Mesh" is for large organizations with distributed teams.                                |

---

## 2. The Verdict: "Event-Driven Operational Warehouse"

For **Project Puente**, we are adopting a pragmatic hybrid approach. We don't need Big Data tools yet; we need **Fast Data** tools.

### The Stack

- **Storage (The Truth)**: **Supabase (Postgres)**. Acts as our efficient, relational Data Warehouse.
- **Ingestion (The Nerves)**: **Event-Driven**.
  - _Micro_: Next.js API Routes (Webhooks from Privy/Celo).
  - _Macro_: Supabase Realtime (Websockets for UI).
- **Logic (The Brain)**: **Edge Functions** (Next.js/Supabase).

### Why this works for us?

1.  **ACID Compliance (Money Rule #1)**: Unlike a Data Lake, our "Warehouse" (Postgres) ensures that if a transaction is recorded, it adheres to strict schema rules. We cannot lose money in "eventual consistency".
2.  **Real-Time (UX Rule #1)**: Standard Warehouses are slow/batch. By using **Supabase Realtime**, we turn our DB into a "Streaming" source for the frontend, mimicking the _Reactive_ benefits of Kappa Architecture without the complexity.
3.  **Auditable**: Every state change is a row in a table. This is critical for Fintech.

---

## 3. Implementation Guide (The "Puppet Master Mode")

How we apply this to the current code:

### A. The "Source of Truth" (Supabase)

We stick to strict schemas. No "JSON dumps" unless necessary for metadata.

```sql
-- Structured, typed, safe.
create table transactions (
  id uuid primary key,
  amount numeric(20, 6) not null, -- Precision is key for Crypto
  status text check (status in ('pending', 'completed', 'failed'))
);
```

### B. The "Reactive Layer" (Event-Driven)

Instead of polling the blockchain endlessly (inefficient), we will move towards an event-driven model:

**Current Phase (Pull)**:

- User clicks "Send".
- Frontend waits for receipt.
- Frontend pushes result to Supabase.

**Future Phase (Push/Event-Driven)**:

- User sends Tx.
- **Webhook/Indexer** detects simple transfer on Celo.
- **Edge Function** receives payload -> Updates Supabase.
- **Supabase Realtime** pushes update to Frontend User.

## 4. Summary Recommendation

> 💡 **"Keep it ACID, Make it Reactive."**

Do not over-engineer a Data Mesh or Lakehouse yet. Focus on:

1.  **Reliability**: Postgres (Warehouse model).
2.  **Speed**: Realtime Subscriptions (Streaming model).
3.  **Integrity**: Strict Types (TypeScript + SQL).

This aligns with the **MiniPay** requirement for a "snappy" lightweight experience.
