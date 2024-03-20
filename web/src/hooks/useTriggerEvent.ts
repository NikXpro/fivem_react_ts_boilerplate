type triggerEventProps = {
  action: string;
  data: unknown;
};

export const useTriggerEvent = ({ action, data }: triggerEventProps) => {
  const event = new MessageEvent("message", {
    data: {
      action,
      data,
    },
  });

  window.dispatchEvent(event);
};
