interface NoteProps {
  children: React.ReactNode;
}

const Note: React.FC<NoteProps> = ({ children }) => {
  return (
    <div className="bg-blue-100 border-l-4 border-indigo-500 text-blue-700 p-4 mb-6 md:rounded-lg md:shadow-xl">
      <p className="font-bold">💡 Note:</p>
      {children}
    </div>
  );
};

export default Note;
