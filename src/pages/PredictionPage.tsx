import RecentNftCard from "../components/prediction/RecentNftCard";

export default function () {
  function handleSubmit(e: any) {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    console.log(formData);
    console.log(form.method);

    var object: any = {};
    formData.forEach((value, key: string) => (object[key] = value));
    var json = JSON.stringify(object);

    fetch("http://localhost:8080/prediction", {
      method: form.method,
      headers: {
        "Content-Type": "application/json",
      },
      body: json,
    })
      .then(async (response) => {
        console.log("Response:", await response.text());
      })
      .catch((err) => {
        console.error(err);
      });
  }

  return (
    <div className="flex flex-col w-[98%] p-4">
      {/* TOP SECTION */}
      <div className="border-bottom font-robotoLight flex flex-col">
        <span className="">
          <h1>Welcome to SeaFarer</h1>
          <span className="flex flex-col lg:flex-row justify-between">
            <p className="font-robotoLight text-[14px] lg:text-[19px]">
              Click on any of the below NFT collections to make a prediction
            </p>
            <span className="flex-row flex gap-1">
              <p className="font-robotoLight text-[16px] text-offWhite">
                Credits Remaining:
              </p>
              <p className="text-[16px] text-seaBlue font-semibold">400,000</p>
            </span>
          </span>
        </span>
      </div>

      <div className="flex grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid gap-3 border-bottom">
        <RecentNftCard NFTNumber={1} />
        <RecentNftCard NFTNumber={2} />
        <RecentNftCard NFTNumber={3} />
      </div>
      <div>
        <h1>Predict</h1>
        <form method="post" onSubmit={handleSubmit}>
          <label>
            Collection: <input name="collection" />
          </label>
          <label>
            TokenID: <input name="tokenId" />
          </label>
          <button type="submit">Submit form</button>
        </form>
      </div>
    </div>
  );
}
