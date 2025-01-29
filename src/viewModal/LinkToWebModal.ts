interface AboutViewModalProp {
  resumeRedirection: (link: string) => void;
}

export const LinkToWebModal = (): AboutViewModalProp => {

  const resumeRedirection = (link: string) => {
    window.open(link, "_blank");
  };
  return {
    resumeRedirection,
  };
};
