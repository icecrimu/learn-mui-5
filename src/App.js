import React from "react"
import { Box, Container, Stack } from "@mui/material"

import Sidebar from "./components/Sidebar"
import Feed from "./components/Feed"
import Rightbar from "./components/Rightbar"

const App = () => {
  return (
    <Box>
      {/* Navbar */}
      <Stack direction="row" spacing={2} justifyContent="center">
        <Sidebar />
        <Feed />
        <Rightbar />
      </Stack>
    </Box>
  )
}

export default App
