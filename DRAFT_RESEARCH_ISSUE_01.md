# Título: Implementación de SocialConnect (Mapeo Teléfono → Wallet)

## 🧐 Contexto / Problema

> "No puedo pedirle a mi mamá que me mande su 'wallet address'. Ella ni sabe qué es eso." (Manifest Finding 3)

Necesitamos permitir que los usuarios envíen cUSD ingresando solo un número de teléfono (ej. `+58...`), eliminando la fricción de las direcciones 0x. Esto es crítico para la adopción masiva en Venezuela.

## 🎯 Objetivo

Implementar el protocolo **SocialConnect** de Celo para habilitar:

1.  Registro de usuarios de Puente (Teléfono -> Wallet).
2.  Envío de dinero a usuarios de Puente, Valora y MiniPay usando solo el teléfono.
3.  **Restricción:** Debemos actuar como _Issuer_ (emisor) ya que necesitamos registrar a nuestros propios usuarios.

## 🕵️‍♂️ Hallazgos (Bitácora)

- [x] **Protocolo Federado:** SocialConnect usa ODIS (servicio de privacidad) para que los números no sean visibles en la blockchain.
- [x] **Interoperabilidad:** Al usar este estándar, ganamos compatibilidad inmediata con Valora y MiniPay (efecto de red).
- [x] **Rol de Issuer:** Puente debe ser un "Issuer" para verificar teléfonos. No podemos depender solo de lookups externos.
- [x] **Requisitos Técnicos:**
  - Contrato `FederatedAttestations` en Celo.
  - Librería `@celo/identity` para interactuar con ODIS.
  - Servicio de SMS (Twilio) para verificar propiedad del teléfono.
  - Backend (Supabase Edge Function) para guardar la private key del Issuer y pagar el gas de las atestaciones.
- [x] **Costos:** Cada verificación cuesta una pequeña fee en cUSD/CELO (cuota de ODIS + Gas).

## 💡 Conclusión / Solución

**Arquitectura Aprobada: Modelo Híbrido**

1.  **Frontend (Lookup):** Consulta ODIS para obtener la address de un destinatario (si ya existe).
2.  **Backend (Registro):** Actúa como Issuer.
    - Recibe solicitud del usuario -> Envía SMS (Twilio) -> Verifica código -> Registra en Blockchain.

**Próximos Pasos (Action Items):**

- [ ] Configurar cuenta de Twilio.
- [ ] Crear wallet para el "Issuer" de Puente y fondearla.
- [ ] Crear Edge Function `verify-phone`.
