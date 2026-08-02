
export default function Footer() {
    return (
        <footer className="flex items-center justify-center p-4 border-t border-gray-200 mt-auto">
            <p className="text-sm text-gray-500">
                &copy; {new Date().getFullYear()} E-commerse Projesi
            </p>
        </footer>
    );
}