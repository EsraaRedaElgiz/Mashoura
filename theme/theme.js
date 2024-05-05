tailwind.config = {
    theme: {
        extend: {
            //colors
            colors: {
                clifford: '#da373d',
                leftGradiant: '#00DDD0',
                rightGradiant: "#6100DD",
                grey: "#F2F4F7",
                yellow:"#FFC107",
                cardColor:"#F2F4F74D",
                lightGray:"#dddddd",
                purpleAvatar:"#9654F4",
                aquaColor:"#54E8E0",
                menuGray:"#F3EBFE",
                white:"#FFFFFF",
                lightGray2:"#FBFBFB",
                darkGray2:"#D9D9D9",
                green:"#35945A",
                yellow:"#ECBE5E",
                red:"#C80A50",

                fontColor: {
                    darkBlueBaseColor: "#11002A",
                    whiteBaseColor: "#FFFFFF",
                    aquaBaseColor: "#54E8E0",
                    purbleBaseColor: "#6200EE",
                    hrLanguageGrey:"#F2F4F74D",
                    greySmallText:"#5B697C",
                    tooglePurple:"#6200EE"
                },
                buttonColor: {
                    baseColor: "#235A86",
                    whiteBaseColor: "#FFFFFF",
                    aquaBaseColor: "#54E8E0",
                    purbleBaseColor: "#6200EE",
                    greenBaseColor: "#64C680"
                },
            },
            //fontsize
            fontSize: {
                buttonFontSize: "1rem", //16px
                xs: "0.75rem", // Extra Small
                sm: "0.875rem", // Small
                baseHero: "5rem", 
                baseSmallHero:"3rem",
                logo:"2rem", //32px
                lg: "1.125rem", // Large
                xl: "1.25rem", // Extra Large
                "2xl": "1.5rem", // 2 Extra Large 24px
                "3xl": "1.875rem", // 3 Extra Large
                "4xl": "2.25rem", // 4 Extra Large
                "5xl": "3rem", // 5 Extra Large
                "6xl": "4rem", // 6 Extra Large
              },
              padding:{
                buttonSmallX:"1.8rem", //28.8px
                buttonSmallY:".8rem",//12.8px
                buttonLargeX:"4.5rem", //72px
                buttonLargeY:"1.2rem" //19.2px
              },
              borderRadius:{
                small:".5rem",//8px
                medium:"1rem"//16px
              },
              
           


        }
    }
}