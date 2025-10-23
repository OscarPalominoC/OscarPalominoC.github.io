export const Footer = () => {
  return (
    <footer className="py-8 bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} Oscar Eduardo Palomino Cardenas. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
