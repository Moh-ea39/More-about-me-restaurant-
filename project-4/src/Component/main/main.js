import PersonImg from './team1.png'
export default function MainComponent() {
    let Card = [
        {
            id: 1, PersonWork: "Senior Chef", PersonName: "Alizeh Anderson",
            image: (
                <img src={PersonImg} className="img_content" />
            )
        },
        {
            id: 2, PersonWork: "Senior Chef", PersonName: "Alizeh Anderson",
            image: (
                <img src={PersonImg} className="img_content" />
            )
        }, 
         {
            id: 3, PersonWork: "Senior Chef", PersonName: "Alizeh Anderson",
            image: (
                <img src={PersonImg} className="img_content" />
            )
        },  
        {
            id: 4, PersonWork: "Senior Chef", PersonName: "Alizeh Anderson",
            image: (
                <img src={PersonImg} className="img_content" />
            )
        }
    ]

    let Cards = Card.map((Content) => {
        return (
            <CardContent key={Content.id} PersonName={Content.PersonName} PersonWork={Content.PersonWork} >
                {Content.image}
            </CardContent>
        )
    })
    return (
        <div className="grid_for_cards row" >
            {Cards}
        </div>
    )
}
function CardContent({ children, PersonWork, PersonName }) {
    return (
     

            <div className="parent_card">
                <div className="child_for_card" >
                    <div className="img_div">
                        {children}
                    </div>
                    <div className="details_parent">
                        <div className="person_name">
                            {PersonName}
                        </div>
                        <div className="person_work">
                            {PersonWork}
                        </div>
                    </div>
                </div >
            </div>
       

    )
}

