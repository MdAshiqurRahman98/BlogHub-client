import Swal from "sweetalert2";
import Blogs from "../../../components/Blogs/Blogs";
import Banner from "../Banner/Banner";

const handleSubscribe = event => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    if (email) {
        Swal.fire({
            icon: "success",
            title: "Thank you for subscribing to our newsletter!",
        });
        form.reset();
    }
}

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <h3 className="text-3xl font-bold text-center mb-14">Blog Posts</h3>
            <Blogs></Blogs>

            <div className="my-20">
                <h3 className="text-3xl font-bold text-center mb-9">Newsletter</h3>
                <div className="bg-base-200 p-24">
                    <form onSubmit={handleSubscribe} className="relative">
                        <header className="card-title relative top-0 left-72">Get more updates...</header>
                        <fieldset className="form-control w-96 relative top-5 left-72">
                            <label className="label">
                                <span className="label-text">Enter your email address</span>
                            </label>
                            <div className="relative">
                                <input type="email" name="email" placeholder="username@site.com" className="input input-bordered w-full pr-16" />
                                <input type="submit" value="Subscribe" className="btn text-white bg-orange-500 hover:bg-orange-500 normal-case text-base absolute top-0 right-0 rounded-l-none" />
                            </div>
                        </fieldset>
                    </form>
                </div>
            </div>

            <div className="text-center my-20">
                <h3 className="text-3xl font-bold mb-14">To Enjoy Latest Blogs</h3>
                <ul className="steps steps-vertical lg:steps-horizontal lg:w-[700px] text-lg font-semibold">
                    <li className="step step-neutral">Login/Register</li>
                    <li className="step step-neutral">View Details</li>
                    <li className="step">Comment</li>
                    <li className="step">Enjoy</li>
                </ul>
            </div>

            <h3 className="text-3xl font-bold text-center mt-9 mb-9">About Us</h3>
            <p className="text-center mb-14">
                BlogHub, an immersive and thriving online platform, is the ultimate haven for bloggers of all backgrounds and interests. With a seamless and user-friendly interface, it offers a boundless space for creators to share their insights, passions, and expertise across a spectrum of captivating categories. From the latest technological advancements to delectable culinary adventures and thrilling journeys across the globe, BlogHub accommodates an eclectic mix of blog categories, including Technology, Food, and Travel. As you explore the virtual corridors of BlogHub, you`ll encounter a diverse array of compelling narratives, each reflecting the unique voice and perspective of its author. Engage in meaningful conversations by leaving comments and join discussions on topics that pique your interest. BlogHub also spotlights excellence by featuring `Featured Blogs` based on word count, allowing readers to discover and celebrate the most profound and extensive contributions. Whether you are an avid writer, a curious reader, or an enthusiast in any of these realms, BlogHub invites you to embark on an enriching journey through the world of blogging.
            </p>
        </div>
    );
};

export default Home;