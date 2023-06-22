import {
  Avatar,
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  Grid,
  Link,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

const Login = () => {
  return (
    <Container maxWidth='xs'>
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5" sx={{mb: 2}}>
          Sign in
        </Typography>
        <TextField
          label="Email Address"
          name="email"
          autoComplete="email"
          required
          fullWidth
          autoFocus
        />
        <TextField
          margin="normal"
          label="Password"
          name="password"
          type="password"
          required
          fullWidth
          autoComplete="current-password"
        />
        <FormControlLabel
          label={<span style={{ fontWeight: "300" }}>Remember me</span>}
          control={<Checkbox value="remember" color="primary" />}
          sx={{ fontWeight: "bold" }}
        />
        <Button variant="contained" type="submit" fullWidth sx={{ mt: 3, mb: 2 }}>
          로그인
        </Button>
        <Grid container>
          <Grid item xs>
            <Link>Forgot password?</Link>
          </Grid>
          <Grid item>
            <Link>Sign Up</Link>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Login;
