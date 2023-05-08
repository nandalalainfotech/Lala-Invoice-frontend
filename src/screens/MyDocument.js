/* eslint-disable react/prop-types */
import { Document, Page, StyleSheet, Text, View } from "@react-pdf/renderer";

const styles = StyleSheet.create({
    page: {
        flexDirection: "row",
        backgroundColor: "#E4E4E4"
    },
    section: {
        margin: 10,
        padding: 10,
        flexGrow: 1
    }
});
function MyDocument(props) {
    const { data } = props;
    console.log("props", data);

    return (
        <Document>
            <Page style={styles.page}>
                {data
                    ? data.map((a, index) => {
                        return (
                            <View key={index} style={styles.movieContainer}>

                                <View style={styles.movieDetails}>
                                    <Text style={styles.movieTitle}>{a._id}</Text>

                                </View>
                            </View>
                        );
                    })
                    : ""}
            </Page>
        </Document>
    )
}

export default MyDocument
