export const AnimationClasses = {
  animated: {
    animationDuration: "1s",
    animationFillMode: "both",
  },
  animatedFade: {
    opacity: 0,
  },
  fadeInUp: {
    opacity: 0,
    animationName: "fadeInUp",
  },
  "@keyframes fadeInUp": {
    from: {
      transform: "translate3d(0,100px,0)",
    },

    to: {
      transform: "translate3d(0,0,0)",
      opacity: 1,
    },
  },
  fadeInRight: {
    opacity: 0,
    animationName: "fadeInRight",
  },

  "@keyframes fadeInRight": {
    from: {
      transform: "translate3d(-40px,0,0)",
    },

    to: {
      transform: "translate3d(0,0,0)",
      opacity: 1,
    },
  },
  fadeInLeft: {
    opacity: 0,
    animationName: "fadeInLeft",
  },
  "@keyframes fadeInLeft": {
    from: {
      transform: "translate3d(40px,0,0)",
    },

    to: {
      transform: "translate3d(0,0,0)",
      opacity: 1,
    },
  },
  fadeInDown: {
    opacity: 0,
    animationName: "fadeInDown",
  },
  "@keyframes fadeInDown": {
    from: {
      transform: "translate3d(0,-100px,0)",
    },

    to: {
      transform: "translate3d(0,0,0)",
      opacity: 1,
    },
  },

  fadeOutUp: {
    opacity: 0,
    animationName: "fadeOutUp",
  },
  "@keyframes fadeOutUp": {
    from: {
      transform: "translate3d(0,-100px,0)",
    },
    to: {
      transform: "translate3d(0,0,0)",
      opacity: 1,
    },
  },
  fadeOutRight: {
    opacity: 0,
    animationName: "fadeOutRight",
  },

  "@keyframes fadeOutRight": {
    from: {
      transform: "translate3d(40px,0,0)",
    },
    to: {
      transform: "translate3d(0,0,0)",
      opacity: 1,
    },
  },
  fadeOutLeft: {
    opacity: 0,
    animationName: "fadeOutLeft",
  },
  "@keyframes fadeOutLeft": {
    from: {
      transform: "translate3d(-40px,0,0)",
    },
    to: {
      transform: "translate3d(0,0,0)",
      opacity: 1,
    },
  },
  fadeOutDown: {
    opacity: 0,
    animationName: "fadeOutDown",
  },
  "@keyframes fadeOutDown": {
    from: {
      transform: "translate3d(0,100px,0)",
    },
    to: {
      transform: "translate3d(0,0,0)",
      opacity: 1,
    },
  },
};
