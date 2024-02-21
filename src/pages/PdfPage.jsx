import {
  Document,
  PDFViewer,
  Page,
  Text,
  View,
  Image,
} from "@react-pdf/renderer";
import { useAppContext } from "../context/useAppContext";
import logo from "../assets/LOGO.jpg";

const PdfPage = () => {
  const { test } = useAppContext();
  return (
    <PDFViewer style={{ width: "100%", height: "100vh" }}>
      <Document>
        <Page size={"A4"}>
          <View style={{ margin: "50px 25px" }}>
            <Text
              style={{
                fontWeight: "extrabold",
                color: "#4BACC6",
                textAlign: "center",
              }}
            >
              HAJI ABUL HOSSAIN INSTITUTE OF TECHNOLOGY (HABHIT)
            </Text>
            <Text
              style={{
                fontSize: "14px",
                fontWeight: "extrabold",
                textAlign: "center",
                marginTop: "20px",
              }}
            >
              Department of Computer Science and Engineering
            </Text>
            <Image
              src={logo}
              style={{
                width: 150,
                height: 150,
                margin: "25 auto",
              }}
            />
            <Text
              style={{
                fontWeight: "extrabold",
                textAlign: "center",
                marginTop: "20px",
                border: "1px solid black",
                width: "150px",
                margin: "0 auto",
                borderRadius: "5px",
                padding: "5px 0px",
              }}
            >
              Lab report
            </Text>
            <View style={{ margin: "0px 10px" }}>
              <Text
                style={{
                  fontWeight: "extrabold",
                  marginTop: "70px",
                  fontSize: "16px",
                }}
              >
                Course Name: <Text style={{ fontSize: "14px" }}>Something</Text>
              </Text>
              <Text
                style={{
                  fontWeight: "extrabold",
                  marginTop: "10px",
                  fontSize: "16px",
                }}
              >
                Course Code: <Text style={{ fontSize: "14px" }}>Something</Text>
              </Text>
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
              }}
            >
              <View style={{ border: "1px" }}>
                <Text>test</Text>
              </View>
              <View style={{ border: "1px", width: "50px" }}>
                <Text>test</Text>
              </View>
              <View style={{ border: "1px" }}>
                <Text>test</Text>
              </View>
            </View>
          </View>
        </Page>
      </Document>
    </PDFViewer>
  );
};

export default PdfPage;
