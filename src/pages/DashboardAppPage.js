import {Helmet} from 'react-helmet-async';
import {useTheme} from '@mui/material/styles';
import {Container, Typography} from '@mui/material';

export default function DashboardAppPage() {
  const theme = useTheme();

  return (
    <>
      <Helmet>
        <title> Dashboard | Minimal UI </title>
      </Helmet>

      <Container maxWidth="xl">
        <Typography variant="h4" sx={{ mb: 5 }}>
          Hi, Welcome back
        </Typography>

      </Container>
    </>
  );
}
