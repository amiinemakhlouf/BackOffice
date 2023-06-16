import React from 'react';
import { Container, Grid, Paper } from '@mui/material';
import { styled } from '@mui/system';

const DashboardCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  textAlign: 'center',
}));

const Dashboard = () => {
  return (
    <div>
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={4}>
            <DashboardCard>
              {/* Dashboard Card 1 */}
              <h3>Card 1</h3>
            </DashboardCard>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <DashboardCard>
              {/* Dashboard Card 2 */}
              <h3>Card 2</h3>
            </DashboardCard>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <DashboardCard>
              {/* Dashboard Card 3 */}
              <h3>Card 3</h3>
            </DashboardCard>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Dashboard;
