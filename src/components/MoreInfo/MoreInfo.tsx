export const MoreInfo = () => {
    return (
        <div className="my-40 md:flex md:items-center max-w-230 mx-auto">
            <img 
                className="mb-12 md:w-95"
                src="/images/illustration-stay-productive.png" 
                alt="illustration stay productive" />
            <div>
                <h2 className="font-bold mb-4">Stay productive, wherever you are</h2>
                <p className="text-sm mb-4">Never let location be an issue when accesing your files. Fylo has you covered for all of your file storage needs.</p>
                <p className="text-sm mb-4">Securely share files and folders with friends, family, and colleagues for live collaboration. No email attachments required</p>
                <a href="#" className="text-teal-200 flex items-center gap-2">
                    <p>See how Fylo works</p>
                    <img src="/images/icon-arrow.svg" alt="icon arrow" />
                </a>
            </div>
        </div>
    )
}