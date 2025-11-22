export function ScrollCue() {
  return (
    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
      <div className="w-6 h-10 border-2 border-[#00d4ff] rounded-full flex justify-center">
        <div className="w-1 h-3 bg-[#00d4ff] rounded-full mt-2" />
      </div>
    </div>
  );
}
