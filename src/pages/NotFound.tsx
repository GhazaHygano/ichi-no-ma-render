
import { Link } from "react-router-dom";
import Layout from "../components/layout/Layout";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  return (
    <Layout>
      <div className="min-h-[80vh] flex flex-col items-center justify-center px-4 text-center">
        <h1 className="text-6xl md:text-8xl font-medium text-charcoal mb-6 font-serif">404</h1>
        <p className="text-xl md:text-2xl text-charcoal-light mb-8">
          お探しのページが見つかりませんでした
        </p>
        <Button asChild className="px-8 py-6">
          <Link to="/">ホームに戻る</Link>
        </Button>
      </div>
    </Layout>
  );
};

export default NotFound;
