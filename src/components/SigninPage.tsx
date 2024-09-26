import { Box, Button, Checkbox, colors, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import React from "react";
import CustomInput from "./CustomInput";

const SigninPage: React.FC = () => {

  //    const navigate = useNavigate();
  //    console.log(navigate);

  //   const gotoQuestion = useCallback(() => {
  //     navigate("./QuestionPage")
  // }, [navigate]);




  return (
    <Grid
      xs={12}
      sm={12}
      md={6}
      lg={6}
      xl={6}
      minHeight={550}
      sx={{
        boxShadow: {
          xs: "",
          sm: "",
          md: "15px 2px 5px -5px",
          lg: "15px 2px 5px -5px",
          xl: "15px 2px 5px -5px",
        },
      }}
    >
      <Box
        sx={{
          backgroundColor: "rgba(0, 24, 57, 0.2)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          height: "100%",
          borderRadius: {
            xs: "30px",
            sm: "30px",
            md: "30px 0 0 30px",
            lg: "30px 0 0 30px",
            xl: "30px 0 0 30px",
          },
        }}
      >
        <Box width="50%">
          <Box display="flex" flexDirection="column" alignItems="center">
            {/* LOGO */}
            <Box
              sx={{
                mt: "60px",
                width: "150px",
                height: "50px",
                bgcolor: "primary.main",
                borderRadius: "12px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: `0 0 20px ${colors.green[500]}`,
              }}
            >
              <Typography variant="h6" fontWeight="bold" color="white">
                CHERRY_MIN
              </Typography>
            </Box>
            {/* LOGO END */}

            <Typography color="white" fontWeight="bold" sx={{ textAlign: 'center', marginTop: 4, marginBottom: 0 }} mt={7} mb={1}>
              一切为了简化

            </Typography>
            <Typography color="white" fontWeight="bold" sx={{ textAlign: 'center', margin: 0 }} mt={7} mb={3}>
            </Typography>
            <Typography color="white" fontWeight="bold" sx={{ textAlign: 'center', marginTop: 4 }} mt={7} mb={3}>
              加入我们，让我们一起打造简化生活的工具
            </Typography>
          </Box>

          <CustomInput
            label="用户名"
            placeholder="请输入用户名"
            isIconActive={false}
          />
          <CustomInput
            label="密码"
            placeholder="请输入密码"
            isIconActive={true}
          />
          <CustomInput
            label="验证码"
            placeholder="请输入验证码"
            isIconActive={false}
          />


          <Box
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
            mt={2}
            width="100%"
            color="white"
          >
            <div style={{ display: "flex" }}>
              <Checkbox disableRipple sx={{ p: 0, pr: 1 }} />
              <Typography>记住我</Typography>
            </div>
            <a
              href="#yoyo"
              style={{
                color: colors.green[500],
                textDecoration: "none",
              }}
            >
              忘记密码?
            </a>
          </Box>
          <Button
            //onClick={gotoQuestion}
            variant="contained"
            fullWidth
            sx={{ mt: 4, boxShadow: `0 0 20px ${colors.green[500]}` }}
          >
            登录
          </Button>
        </Box>
      </Box>
    </Grid>
  );
};

export default SigninPage;
