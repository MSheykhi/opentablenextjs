import Header from "./components/Header";
import Form from "./components/Form";

export const metadata = {
    title: "Reserve at Milestone Grill | Open Table"
}


export default function Reserve() {
    return (
        <div className="border-t h-screen">
            <div className="py-9 w-3/5 m-auto">
                <Header />
                <Form />
            </div>
        </div>
    )
}