import React from "react";
import styled from "styled-components";

import { Home } from "./pages/Home/Home";
import { AppRouter } from "./Router/AppRouter";

function App() {
  return (
    <ApplicationWrapper>
      <AppRouter />
    </ApplicationWrapper>
  );
}

export default App;

const ApplicationWrapper = styled.div`
  font-family: "Rowdies";
`;
