import { Cart } from "./cart";
import { Button } from "./button";

interface Page1Props {
   buttonArgs: any;
   cartArgs: any;
   page1ClassName: string;
}

export const Page1 = ({ buttonArgs, cartArgs, page1ClassName }: Page1Props) => {
   return (
      <div className={`${page1ClassName}`}>
         <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis quis possimus laudantium sunt minus.
            Recusandae fugiat numquam sed quos asperiores?
         </p>
         <br />
         <Button {...buttonArgs} />
         <Cart {...cartArgs} />
      </div>
   );
};
