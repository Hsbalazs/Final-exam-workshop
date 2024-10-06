import { Button } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { type ItemDetails, itemList } from "../httpClient";

const ItemList = () => {
  const [items, setItems] = useState<ItemDetails[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    itemList()
      .then((itemsResponse) => setItems(itemsResponse.items))
      .catch((error) => {
        console.error("Error fetching items:", error);
      });
  }, []);

  return (
    <>
      <h1>MARKET</h1>
      {items?.length > 0 ? (
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            margin: "20px 0",
            fontSize: "18px",
            textAlign: "left",
          }}
        >
          <thead>
            <tr>
              <th
                style={{
                  padding: "12px 15px",
                  border: "1px solid #ddd",
                  backgroundColor: "#f2f2f2",
                }}
              >
                Name
              </th>
              <th
                style={{
                  padding: "12px 15px",
                  border: "1px solid #ddd",
                  backgroundColor: "#f2f2f2",
                }}
              >
                Description
              </th>
              <th
                style={{
                  padding: "12px 15px",
                  border: "1px solid #ddd",
                  backgroundColor: "#f2f2f2",
                }}
              >
                Photo
              </th>
              <th
                style={{
                  padding: "12px 15px",
                  border: "1px solid #ddd",
                  backgroundColor: "#f2f2f2",
                }}
              >
                Price
              </th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => (
              <tr
                key={item.name}
                style={{
                  border: "1px solid #ddd",
                  backgroundColor: index % 2 === 0 ? "#f9f9f9" : "#fff",
                }}
              >
                <td style={{ padding: "12px 15px", border: "1px solid #ddd" }}>
                  {item.name}
                </td>
                <td style={{ padding: "12px 15px", border: "1px solid #ddd" }}>
                  {item.description}
                </td>
                <td style={{ padding: "12px 15px", border: "1px solid #ddd" }}>
                  {item.photoUrl}
                </td>
                <td
                  style={{
                    padding: "12px 15px",
                    border: "1px solid #ddd",
                  }}
                >
                  {item.price}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>The MARKET is empty.</p>
      )}
      <Button
        colorScheme="blue"
        type="button"
        onClick={() => navigate("/addItem")}
      >
        Add new item to sell
      </Button>
    </>
  );
};

export { ItemList };
