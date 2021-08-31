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

export const Heading = ({ children, ...otherProps }) => {
  return <p style={{ fontSize: "1vw", ...otherProps.style }}>{children}</p>;
};

export const Heading1 = ({ children, style }) => {
  return (
    <p
      style={{
        fontFamily: "Nunito Sans",
        fontSize: "4.7vw",
        fontStyle: "normal",
        fontWeight: 900,
        color: "#444443",
        ...style,
      }}
    >
      {children}
    </p>
  );
};

export const Heading2 = ({ children, style }) => {
  return (
    <p
      style={{
        fontFamily: "Nunito Sans",
        fontSize: "4vw",
        fontStyle: "normal",
        fontWeight: 900,
        color: "#444443",
        ...style,
      }}
    >
      {children}
    </p>
  );
};

export const Heading3 = ({ children, style }) => {
  return (
    <p
      style={{
        fontFamily: "Nunito Sans",
        fontSize: "3.6vw",
        fontStyle: "normal",
        fontWeight: 900,
        color: "#444443",
        ...style,
      }}
    >
      {children}
    </p>
  );
};

export const Heading4 = ({ children, style }) => {
  return (
    <p
      style={{
        fontFamily: "Nunito Sans",
        fontSize: "3.4vw",
        fontStyle: "normal",
        fontWeight: 900,
        color: "#444443",
        ...style,
      }}
    >
      {children}
    </p>
  );
};

export const Heading5 = ({ children, style }) => {
  return (
    <p
      style={{
        fontFamily: "Nunito Sans",
        fontSize: "3vw",
        fontStyle: "normal",
        fontWeight: 900,
        color: "#444443",
        ...style,
      }}
    >
      {children}
    </p>
  );
};

export const Sub1 = ({ children, style, fontWeight = 400 }) => {
  return (
    <p
      style={{
        fontFamily: "Nunito Sans",
        fontSize: "1.8vw",
        fontStyle: "normal",
        fontWeight: fontWeight,
        color: "#444443",
        ...style,
      }}
    >
      {children}
    </p>
  );
};

export const Sub2 = ({ children, style }) => {
  return (
    <p
      style={{
        fontFamily: "Nunito Sans",
        fontSize: "1.8vw",
        fontStyle: "normal",
        fontWeight: 400,
        color: "#444443",
        ...style,
      }}
    >
      {children}
    </p>
  );
};

export const Sub3 = ({ children, style }) => {
  return (
    <p
      style={{
        fontFamily: "Nunito Sans",
        fontSize: "1.5vw",
        fontStyle: "normal",
        fontWeight: 800,
        color: "#444443",
        ...style,
      }}
    >
      {children}
    </p>
  );
};

export const Sub4 = ({ children, style }) => {
  return (
    <p
      style={{
        fontFamily: "Nunito Sans",
        fontSize: "1.5vw",
        fontStyle: "normal",
        fontWeight: 600,
        color: "#444443",
        ...style,
      }}
    >
      {children}
    </p>
  );
};

export const Sub5 = ({ children, style }) => {
  return (
    <p
      style={{
        fontFamily: "Nunito Sans",
        fontSize: "1.4vw",
        fontStyle: "normal",
        fontWeight: 900,
        color: "#444443",
        ...style,
      }}
    >
      {children}
    </p>
  );
};

export const Sub6 = ({ children, style }) => {
  return (
    <p
      style={{
        fontFamily: "Nunito Sans",
        fontSize: "1.3vw",
        fontStyle: "normal",
        fontWeight: 700,
        color: "#444443",
        ...style,
      }}
    >
      {children}
    </p>
  );
};

export const Body1 = ({ children, style }) => {
  return (
    <p
      style={{
        fontFamily: "Nunito Sans",
        fontSize: "1.3vw",
        fontStyle: "normal",
        fontWeight: 400,
        color: "#444443",
        ...style,
      }}
    >
      {children}
    </p>
  );
};

export const Body2 = ({ children, style }) => {
  return (
    <p
      style={{
        fontFamily: "Nunito Sans",
        fontSize: "1.1vw",
        fontStyle: "normal",
        fontWeight: 400,
        color: "#444443",
        ...style,
      }}
    >
      {children}
    </p>
  );
};

export const Button1 = ({ children, style }) => {
  return (
    <p
      style={{
        fontFamily: "Nunito Sans",
        fontSize: "1.8vw",
        fontStyle: "normal",
        fontWeight: 900,
        color: "#444443",
        ...style,
      }}
    >
      {children}
    </p>
  );
};

export const Button2 = ({ children, style }) => {
  return (
    <p
      style={{
        fontFamily: "Nunito Sans",
        fontSize: "1.8vw",
        fontStyle: "normal",
        fontWeight: 700,
        color: "#444443",
        ...style,
      }}
    >
      {children}
    </p>
  );
};

export const Button3 = ({ children, style }) => {
  return (
    <p
      style={{
        fontFamily: "Nunito Sans",
        fontSize: "1.3vw",
        fontStyle: "normal",
        fontWeight: 700,
        color: "#444443",
        ...style,
      }}
    >
      {children}
    </p>
  );
};

export const Button4 = ({ children, style }) => {
  return (
    <p
      style={{
        fontFamily: "Nunito Sans",
        fontSize: "1.1vw",
        fontStyle: "normal",
        fontWeight: 700,
        color: "#444443",
        ...style,
      }}
    >
      {children}
    </p>
  );
};

export const Button5 = ({ children, style }) => {
  return (
    <p
      style={{
        fontFamily: "Nunito Sans",
        fontSize: "1vw",
        fontStyle: "normal",
        fontWeight: 700,
        color: "#444443",
        ...style,
      }}
    >
      {children}
    </p>
  );
};

export const Caption = ({ children, style }) => {
  return (
    <p
      style={{
        fontFamily: "Nunito Sans",
        fontSize: "1.1vw",
        fontStyle: "normal",
        fontWeight: 600,
        color: "#444443",
        ...style,
      }}
    >
      {children}
    </p>
  );
};
