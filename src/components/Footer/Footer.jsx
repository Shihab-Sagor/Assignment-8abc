const Footer = () => {
    return (
        <div>
            <div className="text-center mb-10">
             <h1 className="text-2xl font-bold">Gadget Heaven</h1>
             <p> Leading the way in cutting-edge technology and innovation</p>
            </div>
            <hr />
           <footer className="footer bg-white w-full p-10">
  <nav className="ml-36">
    <h6 className="text-lg font-bold text-black">Services</h6>
    <a className="link link-hover text-gray-500">Branding</a>
    <a className="link link-hover text-gray-600">Design</a>
    <a className="link link-hover text-gray-600">Marketing</a>
    <a className="link link-hover text-gray-600">Advertisement</a>
  </nav>
  <nav className="ml-12">
    <h6 className="text-lg font-bold text-black">Company</h6>
    <a className="link link-hover text-gray-600">About us</a>
    <a className="link link-hover text-gray-600">Contact</a>
    <a className="link link-hover text-gray-600">Jobs</a>
    <a className="link link-hover text-gray-600">Press kit</a>
  </nav>
  <nav className="ml-12">
    <h6 className="text-lg font-bold text-black">Legal</h6>
    <a className="link link-hover text-gray-600">Terms of use</a>
    <a className="link link-hover text-gray-600">Privacy policy</a>
    <a className="link link-hover text-gray-600">Cookie policy</a>
  </nav>
</footer>
        </div>
    );
};

export default Footer;