const isNews = (news) => {
    return news.map((data, i) => {
        return (
            <div
                key={i}
                className="card w-full lg:w-96 bg-base-100 shadow-xl"
                data-theme="light"
            >
                <figure>
                    <img
                        src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                        alt="Shoes"
                    />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {data.title}
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>{data.description}</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-neutral">
                            {data.category}
                        </div>
                        <div className="badge badge-outline">{data.author}</div>
                    </div>
                </div>
            </div>
        );
    });
};

const emptyNews = () => {
    return <div> Saat ini belum ada berita tersedia</div>;
};

const NewLists = ({ news }) => {
    return !news ? emptyNews() : isNews(news);
};
export default NewLists;
