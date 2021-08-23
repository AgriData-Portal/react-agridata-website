import styled from "@emotion/styled";

// export const CopyRightText = styled.p`
//   font-size: 1vw;
//   color: "#B0B0B0";
// `;

export const CopyRightText = ({ children }) => {
  return <p style={{ fontSize: "1vw", color: "#B0B0B0" }}>{children}</p>;
};

//Can do a if else for phone or desktop if ... return ... else, return ...

export const FollowUsText = ({ children, ...otherProps }) => {
  return (
    <p
      style={{
        fontSize: "2vw",
        color: "black",
        fontWeight: "bold",
        ...otherProps.style,
      }}
    >
      {children}
    </p>
  );
};

// export const FollowUsText = styled.p`
//   font-size: 2vw;
//   color: "#8EAB3D";
//   font-weight: bold;
// `;
