import { Avatar, Grid, Typography } from "@material-ui/core";
import { AppBar, Button, Stack, Toolbar } from "@mui/material";
import Box from "@mui/material/Box";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import InvoiceScree from "./screens/InvoiceScree";
import MovieList from "./screens/MovieList";
import { makeStyles } from "@material-ui/core";
// import Footer from "./components/Footer";
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
                <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
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

              <Grid item xs={6}></Grid>
              <Grid item xs={4}>
                <Box
                  sx={{
                    flexGrow: 1,
                    display: { xs: "none", md: "flex" },
                    mt: 1,
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
          <Route path="/list" element={<MovieList />} exact></Route>
        </Routes>
      </Box>
      <Box component="footer" sx={{ display: "flex" }}>
        <Box>
          {" "}
          <AppBar
            // position="fixed"
            style={{
              zIndex: 999,
              background: "#336699",
              marginTop: "92vh",
              height: 100,
              bottom: 0,
            }}
          >
            <Box sx={{ ml: 135, mt: 2 }}>
              <Typography sx={{ ml: 100 }}> powered by</Typography>
            </Box>
            <Box sx={{ mt: -5 }}>
              <span>
                <img
                  src="/image/nandl.png"
                  style={{
                    height: 50,
                    width: 100,
                    marginLeft: 1180,
                    // marginTop: -10,
                    // marginBottom: 100,
                  }}
                ></img>
              </span>
            </Box>
          </AppBar>
        </Box>
      </Box>
    </BrowserRouter>
  );
}

export default App;
