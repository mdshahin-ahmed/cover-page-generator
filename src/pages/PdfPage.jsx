import { Document, PDFViewer, Page, Text, View } from "@react-pdf/renderer";

const PdfPage = () => {
  return (
    <PDFViewer style={{ width: "100%", height: "100vh" }}>
      <Document>
        <Page size={"A4"}>
          <View>
            <Text>Alhamdulillah</Text>
          </View>
        </Page>
      </Document>
    </PDFViewer>
  );
};

export default PdfPage;
