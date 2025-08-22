import React from "react";
import { Card, CardContent, CardMedia, Typography, Box } from "@mui/material";

function TempleCard({ image, name, history }) {
  return (
    <Card sx={{ maxWidth: 345, m: 2, borderRadius: 3, boxShadow: 4 }}>
      {/* Temple Image */}
      <CardMedia component="img" height="180" image={image} alt={name} />

      {/* Temple Name */}
      <CardContent>
        <Typography variant="h6" gutterBottom align="center">
          {name}
        </Typography>

        {/* Scrollable history text */}
        <Box
          sx={{
            maxHeight: 120,
            overflowY: "auto",
            p: 1,
            bgcolor: "rgba(0,0,0,0.03)",
            borderRadius: 2,
          }}
        >
          <Typography variant="body2" color="text.secondary">
            {history}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}

export default TempleCard;
