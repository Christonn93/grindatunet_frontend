export const Footer = () => {
 return (
  <footer className="text-black-900 p-4 shadow-md text-center">
   <p className="text-sm">
    Designed & Built by{" "}
    <a href="https://github.com/Christonn93" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 transition duration-300">
     Christopher Tønnesland
    </a>{" "}
    © {new Date().getFullYear()}
   </p>
  </footer>
 );
};
