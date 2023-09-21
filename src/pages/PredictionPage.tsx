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
    <div className="flex flex-col">
      <div className="flex flex-row">
        <RecentNftCard />
        <RecentNftCard />
        <RecentNftCard />
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
