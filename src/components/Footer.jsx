import Link from "next/link";
import {
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
    FaPaw,
} from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-black text-white mt-16">
            <div className="max-w-7xl mx-auto px-4 py-12">

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <div className="bg-green-500 p-3 rounded-full">
                                <FaPaw className="text-xl" />
                            </div>

                            <h2 className="text-4xl font-bold text-green-500">
                                PawNest
                            </h2>
                        </div>

                        <p className="text-gray-400 leading-relaxed">
                            PetNest helps loving families find and adopt
                            adorable pets safely and easily.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold mb-4">
                            Contact Information
                        </h3>

                        <div className="space-y-3 text-gray-400">
                            <p>Email: nayemk0087@gmail.com</p>
                            <p>Phone: +880 1888252746</p>
                            <p>Location: Sylhet, Bangladesh</p>
                        </div>
                    </div>


                    <div>
                        <h3 className="text-xl font-semibold mb-4">
                            Follow Us
                        </h3>

                        <div className="flex items-center gap-2">

                            <Link
                                href="https://www.facebook.com/share/1CVMauaYpt/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-white/10 hover:bg-green-500 transition p-3 rounded-full"
                            >
                                <FaFacebookF />
                            </Link>

                            <Link
                                href="https://www.instagram.com/ahmmed48259/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-white/10 hover:bg-green-500 transition p-3 rounded-full"
                            >
                                <FaInstagram />
                            </Link>

                            <Link
                                href="https://www.linkedin.com/in/nayem-ahmmed"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-white/10 hover:bg-green-500 transition p-3 rounded-full"
                            >
                                <FaLinkedinIn />
                            </Link>

                        </div>
                    </div>
                </div>

                <div className="border-t border-white/10 mt-10 pt-6 text-center text-gray-400">
                    <p>
                        © {new Date().getFullYear()} PawNest. All Rights Reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;