export function Footer() {
  return (
    <footer className="flex h-16 w-full items-center justify-center border-t">
      <p className="text-center text-sm text-white">
        &copy; {new Date().getFullYear()} elëos events
      </p>
    </footer>
  );
}
