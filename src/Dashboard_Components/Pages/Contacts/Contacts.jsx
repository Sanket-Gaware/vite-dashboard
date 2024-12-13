import {
  Block,
  ChevronRight,
  Home,
  Message,
  MoreHoriz,
} from "@mui/icons-material";
import {
  MuiAvatar,
  MuiBox,
  MuiButton,
  MuiCard,
  MuiIconButton,
  MuiTypography,
} from "../../../MUIComponents/Mui";
import { Typography } from "@mui/material";
import { ContactsData } from "../../../Data/JsonData/EmployeeData";
import { useNavigate } from "react-router-dom";

const ContactsTable = () => {
  const navigate = useNavigate();
  return (
    <div className="container-fluid">
      <div className="row">
        <MuiCard className="d-flex justify-content-between m-1 p-3 mb-3">
          <MuiTypography sx={{ fontSize: "medium", fontWeight: "bold" }}>
            Contact Cards
          </MuiTypography>
          <MuiTypography sx={{ fontSize: "small", fontWeight: "bold" }}>
            <MuiIconButton onClick={() => navigate("/dashboard/home")}>
              <Home fontSize="small" sx={{ color: "#5e35b1" }} />{" "}
            </MuiIconButton>
            <ChevronRight sx={{ color: "gray" }} /> Cards
          </MuiTypography>
        </MuiCard>
        {ContactsData.map((data, i) => {
          return (
            <div key={i} className="col-12 col-sm-6 col-md-4 col-lg-4 mb-3">
              <MuiCard sx={{ p: 2, borderRadius: "0px 15px 15px 15px" }}>
                <MuiBox className="d-flex justify-content-between">
                  <MuiAvatar src={data.image} />
                  <MuiIconButton>
                    <MoreHoriz />
                  </MuiIconButton>
                </MuiBox>
                <MuiTypography variant="h6" className="d-flex fw-bold">
                  {data.name}
                </MuiTypography>
                <MuiTypography sx={{ fontSize: "small", display: "flex" }}>
                  {data.role}
                </MuiTypography>
                <br />
                <MuiTypography sx={{ fontSize: "medium" }}>
                  {data.description}
                </MuiTypography>
                <br />
                <MuiTypography
                  className="d-flex"
                  sx={{ fontSize: "small", color: "gray" }}
                >
                  Email:
                </MuiTypography>
                <Typography
                  className="d-flex"
                  sx={{ fontSize: "small", color: "black", fontWeight: "bold" }}
                >
                  {data.email}
                </Typography>
                <br />
                <MuiBox className="d-flex justify-content-between">
                  <MuiBox>
                    <MuiTypography
                      className="d-flex"
                      sx={{ fontSize: "small", color: "gray" }}
                    >
                      Phone
                    </MuiTypography>
                    <MuiTypography
                      className="d-flex"
                      sx={{
                        fontSize: "small",
                        color: "black",
                        fontWeight: "bold",
                      }}
                    >
                      {data.phone}
                    </MuiTypography>
                  </MuiBox>
                  <MuiBox>
                    <MuiTypography
                      sx={{ fontSize: "small", color: "gray", display: "flex" }}
                    >
                      Location
                    </MuiTypography>
                    <MuiTypography
                      sx={{
                        fontSize: "small",
                        color: "black",
                        fontWeight: "bold",
                      }}
                    >
                      {data.location}
                    </MuiTypography>
                  </MuiBox>
                </MuiBox>
                <MuiBox className="d-flex justify-content-between mt-3">
                  <MuiButton
                    variant="outlined"
                    sx={{ fontSize: "x-small", fontWeight: "bold" }}
                  >
                    <Message className="me-1 fs-5" /> Message
                  </MuiButton>
                  <MuiButton
                    variant="outlined"
                    color="error"
                    sx={{ fontSize: "x-small", fontWeight: "bold" }}
                  >
                    <Block className="me-1 fs-5" /> Block
                  </MuiButton>
                </MuiBox>
              </MuiCard>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ContactsTable;
