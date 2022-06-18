import React from "react";
import { HorizontalBar } from "react-chartjs-2";

const SkillBox = ({ skills }) => {
  const data = {
    labels: skills.Technologies,
    datasets: [
      {
        label: "Skill Rate On Scale of 10",
        backgroundColor: skills.BarColor,
        borderColor: skills.BarBorderColor,
        borderWidth: 1,
        hoverBackgroundColor: skills.BarHoverColor,
        hoverBorderColor: skills.BarBorderColor,
        data: skills.Rate,
      },
    ],
  };

  const options = {
    scales: {
      xAxes: [
        {
          ticks: {
            beginAtZero: true,
            min: 0,
            max: 10,
          },
        },
      ],
    },
  };

  return (
    <div className="skill-box">
      <h1>{skills.SkillName}</h1>
      <HorizontalBar data={data} options={options} />
      <br />
      <br />
    </div>
  );
};

export default SkillBox;
