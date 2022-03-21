import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { FaFacebookSquare, FaInstagram, FaYoutube } from "react-icons/fa";

function FooterBlog() {
  const listImageInsta = useRef([
    {
      linkInstagram: "https://www.instagram.com/p/Ca4G9XJrcoC/",
      imageInstagram:
        "data:image/jpeg;base64,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",
    },
    {
      linkInstagram: "https://www.instagram.com/p/CatT_77rlY3/",
      imageInstagram:
        "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYVFRgVEhUZGBgaGhgYGBkaGBoYGBgSGBoaGhgYGBocIS4lHB4rIRgYJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QGBISGjEhGB00NDExNDE0MTQ0NDQxNDQxNDQ0MTE0PzExND80MTE/MTQ/NDE0PzExNDE0MTExMTExMf/AABEIAKgBLAMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAFAAIDBAYBB//EAEYQAAECAwMHBwkHAgYDAQAAAAEAAgMRIQQSMQVBUWFxgZEGIjKhscHRBxMjQlJyc4LhFDM0YrLC8BWSJFNjg6Kzo9LxQ//EABgBAAMBAQAAAAAAAAAAAAAAAAABAgME/8QAHhEBAQEBAAIDAQEAAAAAAAAAAAECESExAxJBUSL/2gAMAwEAAhEDEQA/ANs2I3SnB7dIVNoUgbqU9acWOadHUuebYczeAUMtS6wI+xcTthtB5oANcAFBbLEyKWtiNvAXiBMivNBwViGEJ5Tx3MYxzXFpvETFKSnLqTlFOdybsxrcI2Pd4p7Mgwhhe/u+izbcrRP8w8fqp25Yie2UdTyLz+RdlJLnMvE1JddJJOkyQ+2eTqzPdea97KSk0C7iay016lKMsxfb6gpG5ai+2ODfBKSTydvZwJf5MYea0vHyNPeon+TAZrSd7B4o83LUX2m/2hTwssPON3gn9i5GUf5MX+raW72HuUDvJraPVtMPPmeCt4zKTzmHA+KeLe7QOvxR9ofHnjvJ5axhGYc3SeKY9oB3BQO5AW5vRczZ5whemi3u9kda79uPs9afYXHlL+QlvnO4wkSkRFqJYSMs1FDE5E2/HzIcffBXrotp9nr+icLX+XrR2DjAWbk/aWNa0wXUAGY6ESybk2Mx4LobgK4gLXfa/wApSFp1HqS5D8hsGE4YtI3Kyxh0FWhaAcB1jxT750Hq8Ucn9HlFDasFy0B+32cgGjcZUBrnW+jRCBO6RrmPFArflSGx5bEeGmQNRm2yWmdTNlRrN1LEvJ58/OnObs+Cjy+zn2UVPpHjWZszqp/WIWaK0bHSntVLKeW2NbfMRri2ZYLwJvESmM4orvzS6t4zz8X1zzrNcv8AK1+K2zwybkOZdWjorzN09kzT8yyJKmtUa+97z6znO3uM+9QrK3taSchAp6jATwFJuJ7ExOhMJMhVMLUCE4u5o4BEsmWJ0WI1uDmG8QcS0HQjnJmwsY28/pnCWYI9EyYyI4Pabjx0XtMjv0hK05KEvcIcdzTzCTOky1zXGYm04bs6KXcDmOGz+SUGWMnOcL7jz2g9HONIBV7JdlMWH6NwkLvTmMAZigxmQlns1z8afJzWe33EV1aWxN9Gz3R2IWMkP0s/uPe1F4ULmtBxAAO0LojlWQwJwYExpTwVzOp0wwutYuTTmoCRjVneXI9FDl/mfsK0kMLO8uR6KH8T9jk4msUJ6V0E6UgE6SZECdKeCdKaE8ICaETpRKxsnnQ2GiNjKkxiFZ/zKcWb8wUMF9FO16A79mOld8wdK7fXQ9A8GiAV0QHak4PT2vQfhwQTpT2sGlcL0mlATMloUgKjYpAEBBbOgd3aF5xyrPph7je9ekWwcw7u0LzblaPT/I3vQnQPMIVlWJUNG0okguUDz04SokulIBUR7AuPCeBRPhQ3no4aJpHJ1AxhNArsAuhubJribzQZCZNRMDNOWE0Uydkh4F5w6kasdikTI0cQZaKSIGtRrcjXPxWrWT4UhQkmsyca4ClKBFrG6ThPSorPDDQGgUTm0KzmvLS5nGgj2cPZhmkd6z9rZGsrCbJJzRV7HC873myOAzhaOxxbzUnsmV0c/Y5+/jDt5ZWjG6w5+ia9a3sJ02tJxIB41WM5R5Aq6LBbWt9gGc+u0doWzgt5o2DsV5trOxYATwEgE4BYtykutCUk5qCSwws7y5HoYfxP2PWjhrOcu/uWfFH6HpwqxaQTLynaKDYmkyacCnsarTYTdAQEEMolY1AITdCkYZYUQOjcFTtCCNtbx63UPBOFtie3/wAW+CXD6OBdCCC3RPa/4t8E8W5/tdQ8EcHRhOCEC2v0jgPBW7Pasb5GrAI4Orqe0Ki+3sGdXYTpgFJSwwKQBMYpQgILaOYd3aF5rys+/wDkb3r0y29A7u1eacrPv/kb3oToEVHKthLQ18scdU8FeDZkAZytbFya1zLjhMEAFK6+qsZ+0ry66kAj2VuTr4RLmAuYcDoGgoKZjEeKqWVNzYey7Ko2fVFLNZmMYIkZ92eDcSqeS2X3htDnkVpv6QIs/OsNCLt1xbNtJtpmJU6q8Zt8ieTXzZTAq06zjELtksoY2XZgBmA1BNtdqawc4iZo2Z7FjL5dNngg8sBceiMa1G5J8XOhtmgOc98SI6YMg0Vk1gGjSTOqlfGvzbDAJmAXGsqjNnKcnlNt4PWC0yzoqI+dZ6xQ7tJoo+jCQV05vhzanlLHtQL91dqX2kijXUWUi5TDXuJNMN6m+1xDW/c0NGYa9aXYXO/j0IBOASATgpU5JdaF2SQQEsNZzl99wz4o/wCt60kNZvl/+HZ8Vv8A1xE4WvTBgq/DZMA6ghs0Zs45jdgVZjO01jFbZDTWNVtrVVhdRebS82lFtbGmTngHROqhOU4ftdRS4fUpYlJVzlOHpP8AaVz+pQ/aPAoPq0AnNCrw7YxxkHiZzYFWw1IOtCgykZBu9WWhVsq9Fu0jqU1UUoT6LX2U81vujsWIhOW1sJ5jfdHYkcEIanaoYYU4QaG2dA7u1eacrPxHyN716ZbOgd3aF5pyt/EfI3vQnQbk5k4rBpc3tW5DaLGZCZOOzaTwBK2b8FGvbX4/SnawCyR2LG29rXOLbg5tJ51qrfEk0rJxMTPSlmdp6vIrssrQQQLpnRwxBzFbHJsa80XiCc5GB1rKhWrFbCw5y3ONekJ6z30WN89tg8CSHx7Mx7w5wq2g34qlCy4wkNJNdIzq457XCjljZY3m5fSna4hcbjDIDpO0fVcssmzuigw8VZg2VgBArMknSSc6e2z8ETwq2XPCgvK5lTKYhwnVwoPeNAorbaWsBWSyna3RHAHATIGk4TW2dVzbylszHPm87fqicCNeE59aA2OO5hI9U5tB0hFob7olvphVGiw9kATgFC1xJIDsMaZ6UHFSBjvazTw2eKtPDyuNTK+1nl1nwVQWwhwaW4mRrUFAFIazXlA/DM+M39ERaOEVnPKF+GZ8Zn6IicLXp59NG7IeY3YEBmjdhPMbsV5ZVbaVYe+6xztDSepVWqW1/dP9x3YU6IzU9OPeuAToN21dU1hdKIw6HN7UEgIzfRJaW3WNj3vmK3nVGOJ4rP2mCGOuhwdrHYg7EM9C2RFGkYOYx42PYHd6xi2cH7qB8FnVeb3JU8nNCp5Y6DT+buKuhVMsj0Y97uU1cBIblt8mnmM90LBsK3OSDOEz3VInsXhqdqhhKcIUhtfQO7tXmPK98rR8jO9enW3oHaO1eacssnmJGbcMnFoFcJNzbaoKxByTcHxXEGdxtdrjIdQK1sY0WV5N2Q2cRCXNe5zgKTF24DzTrm48UUjWx51blnrU61znwhym9Zl5qdpRWI+ZrpQiK7nHae1GE/J+FNK8mFy4XrRmY41C0OT5ebJOYLNF1QjtnjSgk6iiw549K78sFp6OGtFrLaYjwC4BsxOWLg3SRm2IFYrLeN9/RnMD2j4Io95xnU0WepmNc3VDMsOe182sL2SrLEHPRD2WmG+g5rtBp9EeizFdaqx2guexsgWhhBAGcPJnT8nWjso5f6pwLC55w35kZbY5ADUpbD0GywkJbDUJ0Rt4zqptXI9OjUvECp8RVSnu/wDVMiGc8MN2P8O9PJpuPYFsxV4ryJEAkzAkJE1cVRDjeq0j0jZzkZVoDLiiYqZUznrKHR3ekGjzjO7xQVF4SznlC/DM+Kz9D1o4SznlD/Ct+Kz9MROFr083JRzJxnDbv7SgJKOZKPoxtd2rSMqvNxVmKy8xzdLSOpV2Yq40URRGRmnMdJzToIPAz7kStGR3XiYZBGIBMiFD/SomgcUDh1vym6I510XWkk6zMzqR2IaiH9KiaBxTm5HiflHzfRBBq2kEejgj/SZ1zcOooCzIjiec8Aaq8EfbSQ0ADcBIDgEqqHtVPLH3W8K4FVywPRHa3tU1TNMK3ORT6JmzvWDYVusgmcFm/tUnPY5CU7VBCVhqFIbZ0DtHasJyhEol/Q5nB02ntC3ds6B2jtWK5QQ7zYoE5hgdsum9MHcnJ3wVvOUJsjOdGGmI124w2DtaVYjCigsL5vjDMHMb/wAGn9ysWjBc1dEC4jgDvQOLaG3jzhie1GLfMNLpUE9+gDSg1puNobgdiZmVTitvinay+W+jDHbpCa6MNIUfnG+1DUbozZ+qdi1+mv4yms/110YaUYybecAT0ZtlrJIrsl2ofZslucGucLrXEAHUROfgj7oIY0XOi0AHPINwduz6lnrXGmcpnCo29QUdpo0H87esy71LDcHVzicxoXLRDvMcNRlt0rBubGbQbVTYycWL7rOxyvWZ99jTnIr72fvUUBkoz/zNYeF4HuTI7Io5l0+qSNyuBMs7JXhrVHKkV4cAzC6OMz3SSHePWXC8XDZQilDjPd1BSTmNrTKsszc6awG++cpSEsZ4DGa7CM5D8pG/m/RdDEyEZyP5nN1Ue4caILaaWj/chZhhdE+0fzAvFiBjQSDK+6usvdQIC+KHxg9oMvOQhUVFGitacEFfTVQlm/KH+FHxWfpetHBKznlD/Cf7kPscnC16eZko9kc+jHvO7VniUfyJ938zu5aRiJw8VdaFUhCqutCKqOJSTkpJGbJIBOunQetdukYhAckuhJdCAcFWysPQu3dRVkKvlQehfsBU1TJsK3PJwzgt39qwbCt1yYM4I2lSJ7aCGrDVXhqw1CkFs6B2hY7LbgfPNl/+TjPa0rY23obwsHyitAa6MKzMIyOb+VVZvktTsBckRrxiOlVxY8VzOhsAnsIcNyI3STIGucoPkE1acZw5b2RCB1PCJWt7j6NhkXVe72W6tZXNr26M+g7KVpvOuQReIkCcedjQp1lyQ97L99kqg3nOxGM5BWHtbDYRDEqU0zOlZq2R3iTWudI4iZALprb4d/Wsfmz9oMRrISSGPhOcMWsc+mGJcJDqV1lgZS8A4yEwZET04V61zJVjMJgaZzMi7U4gTGxWyPZT38+teO8Hx/DnPvya9sxIqC8WmR3HTqOvUpy7MafzSmPaDzSufrfiCEy66mGA2eydmZW2jMh8Qlp5xn7JzO1HQ7tRCC+8Af8A7POmFCzG49zDgec3f0gp4gk9j9rTsNR2daiylDNHtxaZ7s6lY4PYCMDXYUBbazPpTDZrznHWP0tUsAzapWGrto/S1BPQoBJEznaDxAmutaQ6RwzY6WYrkFkpjGTQODW66ad6e4ze0EUrnnhcIMs2xbsVK3sDmAFpdN+Ax6TsFnWwQyO1oBEokKjpXq3TPq60ftzy2E17DzhEIma+u4LN2Jz3PJeS5wjQwXVPrykZU0Y6EfovptYKzvlD/Cf7kP8ActFCxWd8of4M/Eh9pTidenlxK0GQOgfePYFnloOTnQf73ctIxGYQqrwCrQG1VuSKuOAaZ/XN3KS4yeLpVzZ+9IPOZK+7TgpM6mYvltI2dcknMbna/iFHeOlK9rQEhYJGTDqmcCoi0jFKa6gOAKHKYnBf7pKsBRZQE4UT3SppsWwrb8lD6H5isNCK2/JI+iPvJCe2lhqdqhhqdqFILd0DtC8v5YxZRYjc5hDPpIzbl6hbuhvC8e5cP/xbxmMJktsygdLk88S1tvgfMGH9vUjEOHKZOJqVnchRJPlpP7XeCPxHE0Cx3P8ATbF/yp2y8911tTn0CeE+1D7JZWm0XKODGEzOeJeBB2UKMvkwGhc81DR2u0DWVQybZSyK8vM3XWkywmay3U4ozeQanmDDXgifVrGIKY4A6iq9seYZvgTaemNGh471xtoBExUGsxnCniupS84OHgdqYW+zhoPce5Nv/wAkml4/hQbpdiHCYOIOKfYmyvCcxiJ4jMQTnTHGYrXWMU2E+64HEYaDLWgurr2TBCFWZ/m3lh6JqNRRcoblKzzF4YhAE4B8ULyxaXMeAzAtBO2ZHcp8l2q8JHEUV5rRW8NmyQ75oJ6bdkSdVeoJrgA9tMQ4ncBKqe7E7FG9k3t+b9q6GKjbbMXwbjCJmI4ieEhEeVnhAdCjBjjXzsEmU5Gbmu71p7N0B8V4/wDI8SQHKwla2+/A7WI/Svpp4QWe8of4J3vw/wBS0cPBZvyh/gnfEh/rCcK+nlhK0HJjov2t7Cs9IrQ8lcIm1verjNo4DVbkoYDaq3cRVRFJFLJZ2FjSWtJJN4kypM/RDy1cLUjW40OHec2gExUHVVcAhgSmKEkdwNKqoWLl1I0lquU83pM1XUl1K6gjQo7aPRP913YpgEorZscNII6kqHncB+C3fJA+jd7yCQ8h3hgRrwWm5PWHzTXNmTMzSE9jsNTtUMNWGhClW39DeF49y4H+Ld8NnaV7DlDobwvIuWbP8Y4/6bO9BUIyXEuvadY/nWVqXxcQyUx0nmoGmWkrEsfJ0jSu+S2lguuY10qS6IE66znWe5+tfjvjjtjgSqJyxJNS9xxc7uGYUVeHM2h0uiGEOP5iRIcAVdjWq7g1x6kPNsLJ3WSmZkk4lZzrS8X7SRKvBC7GC0HRMyGjYqz7U4um4z3zlsATvOuODSflP0VTNT9pBB0XRRRudPOq9x5nJjuCkhsi/wCTPbNVMJvyQnAaTxVd8Zoxf1ojDsr3dOzDip25JY7GBL55d6ufHP6i/Lf4VjjB7A4GeY7QnRWzCkhZPEJpu3pEzkXNdLZIA8ZrhCy1nlaZ12ArgWPmMEbhRpgFUbbAmFSg2tzRJLintN8EmWac9ziD1tPBR2hxD2ECcg+gziTfFSAY610ioOjDSMPBbsQ3JjHXTjIx4ziCKzMR2fQhWU62kFxAcHwObiTzmT4Cu5adglgM5O8mfemuaJoKnQ8EE5ZwC+zOaPbYeDgjgVLKsMvZdAmSW02FPJa9PLf6M9EMj2R8Mu5hMwJSlmn4rYQsjk1dTrP0V+z2BrOi2ukrTwzmaCWOC8+oRtIHir4sz9A4/RFBB/lF3zetTVyBX2R/tN4FIWF2d3AeKK+b1rlwJGGCwaXngE77A3S7iiNwa1wsGhAD/sLM8zvPcu/ZGex1nxV0y0BMfFaMS3iEBALOweoOE+1dMNoFGjcAuPt8MYvaN4Vd+WII9cbplSZXDoPBWrOJYiSHOy3C0uOxpUbsuMzNceHigDoiAZ0vtbRnWcflrQw7zJQvyu7MwcSgutDbLW17bonOejQsnb8gCNEMRz5CQbKUzTXvReyB72X3yAnzQBjiCTXBCMpZQex5Y1wAoeiCZnWUByFycgtzTOk1VxlgY0SHchByhEPrngB2BM+1POL3f3FFglGHWJhxao3WOGPUaEJc8nEneSUxyXD+wrchD2OKa60Qxnbwn3IQ9QuKfC6NnKMPMZ7AmOyizWgQNVMwo4BN2URmaU02/Q3rVFJAW3W0kSkEwqFrScFaiwHMDb2ev0Ubi8XygiNmhkSDVEwonsqs2r1maU11JdLBxcJXEkBGbQygvNmcBeE+CZbLUyG2/EddaCATImU5gYayEkkAPfyks4weTsYe9QP5UwczXn5QO9JJIkT+VTc0N29wHcoXcqHerDG8lJJT2hE7lJEODWDcT2qJ2Xox9YDY0JJJhE/K0Y+ud0gon22IcXu4pJICJ0RxxceJUZXUkAxwUTgkkkD2J7V1JAOV7JljvuE+iKnwSSQI0NpADJAUpLYsZlk+ldsC4kmdVAU8FJJBFNJxSSQELyoXlJJARA1U7CkkgJApIcMlJJAGbHZA2pxUlvh3mGWIqO9JJKnn2BE1XUkli3j/2Q==",
    },
    // {
    //   linkInstagram: "https://www.instagram.com/p/CZ56_WoLoIW/",
    //   imageInstagram:
    //     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC4hfwvvlQpd23u-uAwRPvDebEFkQDXa4SBg&usqp=CAU",
    // },
    {
      linkInstagram: "https://www.instagram.com/p/CZjx23LvDq_/",
      imageInstagram:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWBW07t6yRmdpai5q4FRYAuey3rbGk43kd4w&usqp=CAU",
    },
    {
      linkInstagram: "https://www.instagram.com/p/CZEuI4rPB52/",
      imageInstagram:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIo6HBcqZxitFwUTq9eHzIHvYyGAEiV7WSJg&usqp=CAU",
    },
    {
      linkInstagram: "https://www.instagram.com/p/CZBM80NLVCS/",
      imageInstagram:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS72zqCgotgV0KXWLS9u3jcgMo4UE9bYi_FOQ&usqp=CAU",
    },
  ]);

  const listTags = useRef([
    {
      text: "Daily file",
      linkDirect: "/",
    },
    {
      text: "Decluttering",
      linkDirect: "/",
    },
    {
      text: "Du học",
      linkDirect: "/",
    },
    {
      text: "Du lịch",
      linkDirect: "/",
    },
    {
      text: "Dọn dẹp",
      linkDirect: "/",
    },
    {
      text: "Futured",
      linkDirect: "/",
    },
    {
      text: "Hàn Quốc",
      linkDirect: "/",
    },
    {
      text: "Học ngoại ngữ",
      linkDirect: "/",
    },
    {
      text: "Khám phá",
      linkDirect: "/",
    },
    {
      text: "Korea",
      linkDirect: "/",
    },
    {
      text: "Lifestyle",
      linkDirect: "/",
    },
    {
      text: "Minatomirai",
      linkDirect: "/",
    },
    {
      text: "Minimalism",
      linkDirect: "/",
    },
    {
      text: "Nhật bản",
      linkDirect: "/",
    },
    {
      text: "Nấu ăn",
      linkDirect: "/",
    },
    {
      text: "Starbucks",
      linkDirect: "/",
    },
    {
      text: "Tsutaya",
      linkDirect: "/",
    },
    {
      text: "Tối gián",
      linkDirect: "/",
    },
  ]);

  return (
    <div>
      <p className="py-3 w-full text-center bg-[#DDDDDD] uppercase mb-2">
        instagram
      </p>
      <div className="flex items-center justify-between mt-7 ">
        {listImageInsta.current.map((image, id) => {
          return (
            <a href={image.linkInstagram} key={id} className="mr-3  h-[154px] ">
              <img
                src={image.imageInstagram}
                alt="instagram"
                className="h-full"
              />
            </a>
          );
        })}
        <a
          href="https://www.instagram.com/p/Ca4G9XJrcoC/"
          className=" h-[154px] "
        >
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC4hfwvvlQpd23u-uAwRPvDebEFkQDXa4SBg&usqp=CAU"
            alt="instagram"
            className="h-full"
          />
        </a>
      </div>
      <div className="flex items-center justify-center pt-7 bg-black flex-col">
        <div className="w-[90%] flex items-center justify-center tracking-widest">
          <div className="flex items-center flex-col w-[25%] text-black  mr-10">
            <p className="  uppercase  h-[48px] flex items-center justify-center mb-6 w-full bg-white">
              Tags
            </p>
            <div className="flex items-center  flex-wrap h-[280px] ">
              {listTags.current.map((tag, id) => {
                return (
                  <Link
                    key={id}
                    to={tag.linkDirect}
                    className="p-2 border-white border-2  mr-2 mb-3 text-[10px] transition-all hover:bg-white hover:text-black text-white"
                  >
                    {tag.text}
                  </Link>
                );
              })}
            </div>
          </div>
          <div className="flex items-center flex-col w-[25%] text-black   mr-10">
            <p className="uppercase   h-[48px] flex items-center justify-center mb-6 w-full bg-white">
              Follow on Facebook
            </p>
            <div className="w-full h-[280px]">
              <div
                class="fb-page"
                data-href="https://www.facebook.com/thehanoichamomile/"
                data-tabs="timeline"
                data-width=""
                data-height="100"
                data-small-header="false"
                data-adapt-container-width="true"
                data-hide-cover="false"
                data-show-facepile="true"
              >
                <blockquote
                  cite="https://www.facebook.com/thehanoichamomile/"
                  class="fb-xfbml-parse-ignore"
                >
                  <a href="https://www.facebook.com/thehanoichamomile/">
                    The Hanoi Chamomile
                  </a>
                </blockquote>
              </div>
            </div>
          </div>
          <div className="flex items-center flex-col w-[25%] text-black   ">
            <p className="uppercase  h-[48px] flex items-center justify-center w-full mb-6 bg-white">
              Subscribe
            </p>
            <div className="flex item-center   text-white flex-col text-center h-[280px]">
              <p className="mb-4">
                Subscribe nếu bạn muốn theo dõi các bài viết tiếp theo của mình
                nhé!
              </p>
              <p className="mb-2">Join 3,921 other followers </p>
              <input
                type="text"
                placeholder="Enter your email address"
                className="outline-none placeholder:text-[#43423B] placeholder:text-sm mb-10 focus:border-2 mt-2 transition-all focus:border-[#D8B975] bg-black "
              />
              <div className="inline">
                <a
                  href="https://subscribe.wordpress.com/"
                  className="text-white bg-[#32373c] text-[17px] rounded-full py-5 uppercase hover:bg-white hover:text-black transition-all px-7"
                >
                  subscribe
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center text-[17px] cursor-pointer text-white h-[120px] justify-center border-b-2 border-b-white w-[75%]">
          <a href="https://www.facebook.com/kiranguyen2512" className="mr-3">
            {" "}
            <FaFacebookSquare className="header-icon" />
          </a>
          <a href="https://www.instagram.com/kiranguyen__/" className="mr-3">
            <FaInstagram className="header-icon" />
          </a>
          <a href="https://www.youtube.com/channel/UCZv-924OFOCEX6A8hcvdisQ?view_as=subscriber">
            <FaYoutube className="header-icon" />
          </a>
        </div>
        <a
          href="https://wordpress.com/?ref=footer_custom_com"
          className="my-5 text-[#D8B975] uppercase tracking-wider text-xs hover:text-white"
        >
          website build with wordpress.com
        </a>
      </div>
    </div>
  );
}

export default FooterBlog;
