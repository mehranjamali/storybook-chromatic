import React from "react";
import { DecoratorFn } from "@storybook/react";

export const withBorder: DecoratorFn = (Component: any) => {
   return (
      <div className="rounded-md border border-slate-500">
         <Component />
      </div>
   );
};
