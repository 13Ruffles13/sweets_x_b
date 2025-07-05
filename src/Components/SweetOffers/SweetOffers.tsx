import "./SweetOffers.css"

function SweetOffers(){
    return(
        <div className="sweetOffersMainContainer">
            <h1>SWEET OFFERS</h1>
            <table className="offersTable">
                <th className="offersTableHeaders">
                    <tr>
                        <div className="offersContainerBorder">
                            <div>Data</div>
                        </div>
                    </tr>
                </th>
                <th className="offersTableHeaders">
                    <tr>
                        <div className="offersContainerBorder">
                            <div>Data</div>
                        </div>
                    </tr>
                </th>
                <th className="offersTableHeaders">
                    <tr>
                        <div className="offersContainerBorder">
                            <div>Data</div>
                        </div>
                    </tr>
                </th>
            </table>
        </div>

    )
}

export default SweetOffers