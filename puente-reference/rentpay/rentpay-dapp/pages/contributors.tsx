import React from 'react';
import InviteContributorsForm from '../components/Contributors/InviteContributorsForm';
import ContributorsList from '../components/Contributors/ContributorsList';

const ContributorsPage: React.FC = () => {
  return (
    <div>
      <h1>Contributors Page</h1>
      <InviteContributorsForm />
      <hr />
      <ContributorsList />
    </div>
  );
}

export default ContributorsPage;
