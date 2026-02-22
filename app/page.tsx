import Hero from "@/components/sections/Hero";
import { Grid, Col } from "@/components/layout/Grid";

export default function Home() {
  return (
    <main className="w-full px-10">
      <Grid>
        <Col span={8}>
          <Hero />
        </Col>
      </Grid>
    </main>
  );
}
