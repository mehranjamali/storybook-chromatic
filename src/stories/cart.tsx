interface CartProps {
   className: string;
   backgroundColor: string;
}

export function Cart({ className, backgroundColor }: CartProps) {
   return (
      <div className={` ${className}`} style={{ backgroundColor }}>
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quasi, quaerat veniam, rerum quia ea
         animi voluptatum repellendus ad officiis cupiditate deserunt quisquam dignissimos tenetur est, odit vel. Nemo,
         dicta!
      </div>
   );
}
