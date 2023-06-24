import { Avatar, Grid, Typography, makeStyles } from "@material-ui/core";
import { AppBar, Button, Stack, Toolbar } from "@mui/material";
import Box from "@mui/material/Box";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import InvoiceScree from "./screens/InvoiceScree";
import Paper from '@mui/material/Paper';

// import Footer from "./components/Footer";
import BottomNavigation from "@mui/material/BottomNavigation";
const useStyle = makeStyles({
  Headers: {
    color: "red",
    fontSize: "14px",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 60,
  },
  Button: {
    backgroundColor: "#336699",
    color: "#fff",
    "&:hover": {
      background: "#336699",
      color: "#fff",
    },
  },
});
function App() {
  const style = useStyle();

  return (
    <BrowserRouter>
      <Box component="header">
        <AppBar
          position="fixed"
          style={{
            zIndex: 999,
            background: "#336699",
          }}
        >
          <Toolbar>
            <Grid container spacing={3}>
              <Grid item xs={2}>
                <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "flex" } }}>
                  <Box sx={{ my: 2, color: "white", display: "block" }}>
                    <Stack direction="row">
                      <Avatar
                        sx={{
                          animation: "spin 5s linear infinite",
                          "@keyframes spin": {
                            "0%": {
                              transform: "rotate(0deg)",
                            },
                            "100%": {
                              transform: "rotate(360deg)",
                            },
                          },
                        }}
                        alt="NitLogo"
                        src="/image/Fav.jpg"
                      />
                      <Typography
                        variant="h4"
                        noWrap
                        component="span"
                        sx={{
                          display: { xs: "block", sm: "block", md: "block" },
                          "&:hover": { color: "#336699" },
                        }}
                      >
                        <div className="firstchild"> Lala</div>
                      </Typography>
                    </Stack>
                  </Box>
                </Box>
              </Grid>

              <Grid item xs={4}></Grid>
              <Grid item xs={6}>
                <Box
                  sx={{
                    flexGrow: 1,
                    display: { xs: "none", sm: "flex", md: "flex", lg: "flex" },
                    mt: 1,
                    float: "right",
                  }}
                >
                  <Button
                    sx={{ my: 2, color: "#fff", display: "block" }}
                    className={style.Button}
                  >
                    Help
                  </Button>
                  <Button
                    sx={{ my: 2, color: "white", display: "block" }}
                    className={style.Button}
                  >
                    Invoicing Guide
                  </Button>
                  <Button
                    sx={{ my: 2, color: "white", display: "block" }}
                    className={style.Button}
                  >
                    Sign In
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </Box>
      <Box component="main" sx={{ mt: 12 }}>
        <Routes>
          <Route path="/" element={<InvoiceScree />} exact></Route>
        </Routes>
      </Box>

      <Paper
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
        elevation={3}
      >
        <BottomNavigation showLabels sx={{ background: "#336699" }}>
          <Grid container spacing={3}>
            <Grid item xs={6}></Grid>
            <Grid item xs={6}>
              <Box
                sx={{
                  float: "right",
                  flexGrow: 1,
                  mb: 1,
                  display: { xs: "flex", sm: "flex", md: "flex", lg: "flex" },
                }}
              >
                <Box sx={{ my: 1, color: "#fff", display: "block", mr: 3 }}>
                  <Typography> powered by</Typography>
                </Box>
                <Box sx={{ color: "#fff", display: "block", mr: 3 }}>
                  <img
                    src="/image/nandl.png"
                    style={{
                      height: 50,
                      width: 100,
                    }}
                  ></img>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </BottomNavigation>
      </Paper>
    </BrowserRouter>
  );
}

export default App;
