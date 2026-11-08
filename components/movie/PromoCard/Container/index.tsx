import { Card, CardContent } from "@/components/ui/Card";

interface PromoCardContainerProps {
  children: React.ReactNode;
}

export default function PromoCardContainer({ children }: PromoCardContainerProps) {
  return (
    <Card>
      <CardContent>
        {children}
      </CardContent>
    </Card>
  );
}