import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import bee from "@/assets/bee-mascot.png";

const NotFound = () => {
  return (
    <section className="min-h-[70vh] grid place-items-center bg-honeycomb relative overflow-hidden">
      <div className="absolute -top-32 -left-24 w-[500px] h-[500px] gradient-sun pointer-events-none" />
      <div className="container-tight text-center relative">
        <img src={bee} alt="" className="mx-auto h-28 w-28 animate-float" />
        <div className="mt-4 font-display text-[7rem] sm:text-[10rem] leading-none font-bold text-ink">404</div>
        <h1 className="mt-2 font-display text-3xl text-ink">This page flew away</h1>
        <p className="mt-3 text-muted-foreground max-w-md mx-auto">
          Looks like our little bee couldn't find that one. Let's head back to the hive.
        </p>
        <Button asChild size="lg" className="mt-8 rounded-full px-7 shadow-honey">
          <Link to="/">Back to Home</Link>
        </Button>
      </div>
    </section>
  );
};

export default NotFound;
