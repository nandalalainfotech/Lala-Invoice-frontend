import { Avatar, Grid, Typography } from "@material-ui/core";
import { AppBar, Button, Stack, Toolbar } from "@mui/material";
import Box from "@mui/material/Box";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import InvoiceScree from "./screens/InvoiceScree";
import MovieList from "./screens/MovieList";
function App() {




  return (
    <BrowserRouter>
      <Box
        component="header"
      >
        <AppBar
          position="fixed"
          style={{
            zIndex: 999,
            background: "#232E38",
          }}
        >
          <Toolbar>
            <Grid container spacing={3}>
              <Grid item xs={2}>
                <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                  <Box
                    sx={{ my: 2, color: 'white', display: 'block' }}
                  >
                    <Stack direction="row">
                      <Avatar
                        sx={{
                          mt: 2,
                        }}
                        alt="NitLogo"
                        src="p11.jpg"
                      />
                      <Typography
                        variant="h4"
                        noWrap
                        component="span"
                        sx={{
                          display: { xs: "block", sm: "block", md: "block" },
                          "&:hover": { color: "#ff7519" },
                        }}
                      >
                        <div className="firstchild"> Lala</div>
                      </Typography>
                    </Stack>
                  </Box>
                </Box>
              </Grid>

              <Grid item xs={6}>

              </Grid>
              <Grid item xs={4}>
                <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>

                  <Button
                    sx={{ my: 2, color: 'white', display: 'block' }}
                  >
                    Help
                  </Button>
                  <Button
                    sx={{ my: 2, color: 'white', display: 'block' }}
                  >
                    Invoicing Guide
                  </Button>
                  <Button
                    sx={{ my: 2, color: 'white', display: 'block' }}
                  >
                    Sign In
                  </Button>

                </Box>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </Box>
      <Box
        component="main"
        sx={{ mt: 12, }}
      >
        <Routes>
          <Route
            path="/" element={<InvoiceScree />}
            exact
          ></Route>
           <Route
            path="/list" element={ <MovieList />}
            exact
          ></Route>
          
        </Routes>
      </Box>
    </BrowserRouter>
  );
}

export default App;
