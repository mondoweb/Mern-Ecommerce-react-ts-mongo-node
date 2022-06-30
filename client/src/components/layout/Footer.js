import React from "react";
import { Link } from "react-router-dom";
import { logo } from "../../assets/js/logo";

import "./styles/footer.css";

//  let faxsimile_footer = " https://mdbcdn.b-cdn.net/wp-content/themes/mdbootstrap4/content-gh/en/_mdb5/standard/web/docs/navigation/footer/examples/assets/2.jpg" ;

const Footer = () => {
  return (
    <div className="footer">
      <Link to="/">
        <div className="footer-top">
          <img src={logo} alt="logo" />
        </div>
      </Link>
      {/*  */}
      <div className="footer-center">
        {/*   */}

        <section className="newsletter">
          <form action="">
            <div className="row d-flex justify-content-center">
              <div className="col-auto">
                <p className="pt-2">
                  <strong> Sign up for our newsletter </strong>
                </p>
              </div>

              <div className="email" md="5" start="12">
                <div
                  className="input"
                  contrast
                  type="email"
                  label="Email address"
                />
                <a href="#!"> emailprova@gmail.commm </a>
              </div>

              <div className="col-auto">
                <div className="btn" outline color="light" type="submit">
                  Subscribe
                </div>
              </div>
            </div>
          </form>
        </section>
   
      

        <section>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
            distinctio earum repellat quaerat voluptatibus placeat nam, commodi
            optio pariatur est quia magnam eum harum corrupti dicta, aliquam
            sequi voluptate quas.
          </p>
        </section>
      </div>

      {/*   Link Footer   */}
      <div className="bottom_footer">
        <section>
          <div className="BROWN">
            <div className="colonna">
              <h5 className="text-uppercase"> Storico </h5>

              <ul className="list-unstyled mb-0">
                <li>
                  <a href="#!"> La nostra Storia </a>
                </li>
              </ul>
            </div>

            {/*  */}
            <div className="colonna" style={{ margin: " 0 160px" }}>
              <h5 className="text-uppercase">I nostri punti vendita </h5>

              <ul className="list-unstyled mb-0">
                <li>
                <Link to="">
                  <img
                    src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxIREBUSExMWFhUVFRUQFRgYFRUVGBUXFRUWFxYWFxUYHSggGBolGxUVITEhJSkrLi4uFx80OTQtOCgtLisBCgoKDg0OGhAQGi0lHx0tLS0tLS0tLS0tKy0tLS0tLS0tLS0tLS0tKy0tKy0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAI0BZAMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAEAAIDBQYBB//EAD4QAAECAwUECAQFBAAHAAAAAAEAAgMEEQUSITFBUWFxkQYTFCIygaGxQlLB0RVicoLwI5Ky4TM0Q5PC4vH/xAAaAQACAwEBAAAAAAAAAAAAAAAAAQIDBAUG/8QAMhEAAgIBAwMCAwcEAwEAAAAAAAECEQMEITESQVETYTJx8AUUgZGhseEiUsHRQmLxI//aAAwDAQACEQMRAD8A9wK4V0rhQA0ppTimlAHEklwlAHUlxprkn3EANXVG+PDbm9o8woHWrBBoHFx2AEpWAWkFB21vynzoh49qEGgAqcKIsCwSUXady4Z1uoKdgToGYtaBDNHRWg7K1PoszbFtRJiJ1MCt0m6KZv8As1Ty3RDu1ixbu5tKD9xWOWpnJtYY3Xd8G5aSEIp55VfC7mglrVgRDRkVpOytDyKNWQm+h/dvQYl7c6mPBwUdg23EhROoj1pW7V2bDoD+VKOplGSjljV8PsKWmjOLlhldcrubJJdLgMyB5qMx2D4uWK2mIkSQz55oya48APqUHFthwygu8/8AQStDotaJLPfjcUuAutFSBkfqrRs64ZgH0QpIOlhqSr5q12Q2FzxhuxqdgWSnLYmJl91l4A5MZWvmRn7KjNqYYvd+EaMGkyZba2S7vg3LorRm4DiQng1WCZ0WmXCpa0fqdj6VUMSWmpM3u8wbQat86Yc1n++ZI7yxtIv+545bQyJs9EXFQ9H+kIj/ANOJRsTTY/hv3K/OGZotuPJHJHqiYsmOWOXTJbiXFE+bhNzeOdfZDvtWGMgT5fdSsgGKGPNMh+N7W8SAqu2baMOELjaPebrdaV1pty5qui2PChQjHmi+I80qAdXaV141VGTM06iuOW+EacWnUknJ/E6SW7ZpoMdjxVjg4biD7KRZSJZIEITMo57SBeunGoGY9Msaq4sq2RGhB5bjk6m0Zox5m30yVPld017Cy4FFdUXaTp3s0/DLNJRNm2HaFI2Iw5OCvsznUk7q00iiYCXQuLqAHBdCaE4IAcEkgkgBLhXVwoAaU0pxTSgDhQU5MXQjHrP2zEJ7ozJAHE4BAFlLTNIDou2obzoPVVMSK52ZJVxNQA2GyFo0D0w+6CbKNrqVFjWwDCk72mG1HwYDYYw8yc1BOWnDhG7i53ytFSh22rCe4NeHsOgeKBUvLjTq1Zd6OVx6lF19fiExprRvP7KKSbeijd3uSMMq3Z6lE2XKNq51N2vFW0yq0PeVUW5HLILyMzRo8zT2qtIZZuz1Kp+lEiDKvLRi2j9cgcfSqjlT9OVeC7T9LyxT4tAfQmTFx0YjEm4NwGdOJPopumzHGXaRkHgu2YggV8yFH0Gmg6C6Hqx17ydrzBVZbUecjvczqojYQcQ0Bru9Q4OcdcqrJ1RWmSXddvPc6CjJ69ybS6Xe7rbtRb9CWOEu4nIvJbwAANNmNUJ04kxRkYDEnq3b8CWn0KEsiJOQC1ohvMO9i0sORONDoVYdOJkXGQtS7rDuABA9T6KDlGWlcWvh8+SPTJa1STT6m3t49yukp+IWNN7SmNDlgim2k/cfL7FPsuzm9Sy8DUi9ntxHoivw+HsPNa8al0K/Bgy9PXKuLYO21Dq0eRUrbTbq0+hTvw6Hv5rn4czfzVn9RVsPlp5hiNxOeoVyY8I5lvnT6qllbOZ1rcTmdRsO5WrrLYdXcx9k9xOjHdJZnrZjq2ZNIY0DVxzPPDyWssWy2wIYAALzi92pP23LHWQ0duaDpFdzFaeq9Ce4AVOAGJKyaVdUpZHzdHT+0H6cYYY8VfzMl0g6QR4UwYbKNa0DNoJNRWuK0FmR+vgMc9o77e8MwdDgdFi+lE1Bix70I17t1xGRcK0odcNVr7EnoD4bWQnDutAu5OFBs14ow5G8005bdv4FqsMY6fHJQp93X7/MyPSCzeyxQYdQ13fZtaRmK7sFdQpoxYAeTmBXiDQ+oUnTgDqWHW/h/a6qrrF/5Y/qNOYUcUVj1EoR4asWV+ppY5Jcp0TqaUhVNTkPdRsZU0CsYbABQLajnsp7cfcjS8R3ha8V3d5p9geSO6VzER7ephwHxA4B5eGlzRjgGkfFh6oa12CNDdD82n8wyPBUlndJZiXHVGjg3C6+tW00BGix5ZKEpKVpT7/udXTQeaEHBJyx9na2u09vDNTYU69sEsiwTDbCZ4iCA4AY56/dB9FJNzoLnCgBeaVroAFUPtSYnnthYAE+FoIHFx1AW7kZZsKG2G3Jopx2lPD/APSSe9RT34u/9FWqh6MGpUpTd0t6S/2wdki6uJFEXCgNbkPPVcizDW5nHYEDGm3OywG77rZsc7kOjTDW5nHYEg+80OVUj5B9WkbMU0waJl0LiQTEOCcE0JwQA4JJBJACXCuppQBwppXSuIAjjHBVEpC6yZB0Z3zxyHr7Kym3UBQkm/qoL4pzccPLAetUm0lbAfMvF5zvKu4KpnrRo03NATX7KGPHc/PkoXNqCDrgsWTO3tHYipbq+CzsSWEOUdHqOse1777qYHG7id9ErNZ2uUIiuDn96hwvM+UmmX2VFJWjCazs00xzmMdfYQXCmdKhpBIxr5oqNacrCDuysdfe0w7xL6AHc44nyVayRUVuqSprvfyo7c8E5OTincmnGSSpLt/Veyrt7EEjGcYYqTh3M9ivbMBEOuOJJ+n0VHLwrjA3XXiVpGNutA2ABQx2o7nGzuLyyceLdEUZ52nmoCaihyOCfFKaq5PcoZkTFiScxVhoRlsc06Eaj7LWSXTKA4f1A5jtaAuHkRj6IC2LN65oDfGPBvr8J4rHOq1xa4EEGhBzBGiUM2TD8PDPTYFh+0Mac/jjs65/8/bg9BnOl8ID+kHPdpUFo864rMse+ZjXnmpOLtwGg2DRVMEkkAYk4BaizpXq201OJP0VsHPUSXVwh54YdFjfp/FLjuy2kXEk46IiOe67gfZDSGZ4fVSTkwxrSHOAqDmRs2LpN0rZwabdIqRMP+Y8ynCZf8x5oVkZpycD5qRVJ3wybjXKDrJmHmOwFxzPsVrljrE/5hvmtirYEJHm9uAy865zfnEYc6kc6haqeh9vlQIUW4HkF2F7LNhFRrTlvVf0ukOta5zR3mEuG8UxH82LJWZakWXdehupXMZh3ELnyl6OSUZL+mR3McHq8MJwdTx/X8/maiH0IIH/ABh/2/8A2Rch0WdCisiCNW6a0uUqNRW9qEBC6cPp3oLSdoeR6UKDtDpPGjC6KQ2nAhuZ4uP0ohy0saaW/wCJH0tfkfTNpJ88f4RP0ttIRYghtNWw61O1xz5Zc1YSUqWQAymOZ4k1KzdnQquDiKtaR5nQLSQ7R/L6/wCk9PkTlLJN7sy6+UMMY6eP/Hd/MLlYN0VOZ9EpuLQUGZ9lyFNtdhkd6nDRWuq3xaa2OddgcGVJzw91V9JLHY9t9hAiDj3xsJ0O9XkWOG8digdHJ3KM4RlHpkW4cs8U1OPKH9GrPhy8Ktb0RwBcQMvyiug9UdHm3HcN33UUI1YOS4U4pRVLhCnOWSTlJ22cSSSTIiRMg+j6bQhk6E6jgdhCALMhJOiZpqmQHBOCaE4IAcEkgkgBJpTimlADSuFdKa5AAFoEkUGZwHmm2rL1YyGDQNx5Cg+qnhsvRRsb3vPT+bkLOueXEtIplTgoySaphyV/4cfmHqu/hx+YJzph4z9lztTv4FT6OPwLoRXWxYJiNvBzQ8DCuFdxKHsGw3XeseQDo3Om801V6JuvibX+bCpGx2Uww8qKP3bG3ZrjqsscLwp7P6r5A0vZpdEaKjOvLFXbpEnUKGym1cXbBTn/APFYOa7R3MKz0IVwZHFFe6y3H4hyK5+FO+YciiIjoo38BVQmcf8AwKP3fF4D00KHZ5Y4OLhQGuRWe6Y2bCi/1YZuxRmKYRBv/MNCtB2x+7ko3zBOjf7Qn6OPpca2ZdgnLDNThz9bGasWxmsYHFwMR2eBo0bAdu9W7ZE7Qmzc06oAoOACaZtwFa5CuScYRhGlwPLlnlm5Se7K60550N3VQzVxoCQMRX4RvU0r0Vc5t+PEuVxIzI/U44BN6HwBFmHxXYlovfucc/Qq/wClUIulIgbpRx4NIJ9FkjjWaLyzV80vY6E5ehOOng6e3VL3ZSR+iQc29AjB+ytKH9zVVSsRzInVRe6a3cfhOld29aDoNDIhxHaFwA4gY4eYUXTmTFGRQMa9Wd4pUcqHmq3jUcaz41T7rs0Prcsz0+R9XZOt0wmx5AiNWowFfULSrL9HZtzsSfgHurZ00/b6LpRaq13OXKLTafYljSRc4muaw3Szo+6CeuZiwnvgDwE6/pK2fbH7RyXDMB1WxKFrgWkUzB2qvLijljTL9NqZ6efUuO68/XY8pa9GSUF0R4a3M+g2lF25YfVxwILg5jzQY4sJ0d+Xf/DoLLsxsBlAQXHxO28Ny5TwTTprg7eq+0sePCpY3blwvHz+X6kb5cQ4QaNCMdp1KaxFTze75hCsVseDyzk5NyfLOq0s+MXAg6eyrQFaSUC4Mcz6K/Tp9doceR0xAvU2hRiVO1Omo93AZ6oGetJ0NhdhXIYalbJSUU2+xfCEptRXLDYs7Cgs778a4NAq4+SrT0khV8D6bcPaq7YNhdeOvjkkEkgVxdvJ2It85JNjdn7OPEGXrjKVPrrmsjyZZJStRT4vdm5YcMW4JObjzWyXkIs6ahR8GRBe+UijuWvkrD8PPzDks5b9g9SOugEtDTUipq38zTnTarKyLYfFhBxIvDuuw12+YVmLLLq9PIqf6Moy4o9CyY3ceN+V8yy/Dz8w5JdgPzDko+2v2jkl21+0clp2M24eW90bsE0JknGLwa5p4UiI4JwTQnBADgkkEkAIppXSmlAHCo4hwUhUEbZtwQBGIohw3POpoPYfVVfb2b+Sl6QxaXIY0F4+w+qplky5pKVLsRcqLyjXDQhCRpQjEY+6Cgxi01BVnLTQfhkdn2U8eZT2fI1MBUcZ4AJOQxVnHgB247fuqC3SWsptKeWXRBy8GnBj9XJGC7sfIGZjktgG4yuLq3fIuGPkEX+CTbauhzN5wzF93LEkc1obJgNhS7GigAYHE7yKkkrNdEmhs1F74yc0Y+Or8xty9VmliVx67bl3uq27Lg1xyXGbxpJQrarvet3yHWNb7i8wY7aRBhWlK00I28M1oBGY7UHj/tZfppCDHwowwdUtO+7iPqrEFXYZSTljlv09/ZmbPCLjHJFV1dvdFq+TYcsOCGiyJAwIPoh2RHDIkIiHMxDpX09Vo2M+5STcFwfiMlGRUU8lZvNXkrrmNOYCVBZn+iE4IMy6E/C/3B+ppwHnj6Kx6QyE7HilrKCCKUF8C9hiXbcdNypulNnXCIzMjRrtx0KfZnTGLDaGvaIgGAJN13maGq56lGF4cjde3g7rxzyuOqwJOTVNPytrQZZ9jTsFwLKAVBIvih4hT9NpwG5BGYN927CjR6lCzXTOI4UhsDN5N4jgKAKss6E6LEL3VdQ3iTiSVBuDXpYm31fl+BFYsil941CS6fHLfa92aHo7Duhw2NaOZKs3CpoFBYEse+T+X6q8ZDAyC6cY0qOLKVttgMGSJxdh7osSzKUomxpprd53fdARplztaDYE7SI7sljQYAPhBO4BTQ2wiKADgq9cKLsdEtpSDLjjiMtcM96roEpDORrwI+ijkZPtcR5eT1UN1wNBIvOGZP8ANVFLWayPBdFgwzBiMcQAHEh13Ghry4rI5Ju4wW9/N1zRo+7QSfU91V7bK+L7/knRaQ4LW5ABNmYpaMNddiDsacvsBPxe4VhEZUELTBpxTjwzPKLg+l9itJVTbx7reJ9lbPbQ0KBteXvwjTNvfHln6VVOeLljkkatHNQzxk/P77GulYjIcuxxIaxsNpqcABdGKxMWegOneuF4w7wecMSQMwNlQEXYVqwY0Ds0x4cLpJLQQDUNJGVFfN6OyYFQwUzrfdT/ACVUurPGPRVLz5NMOnSTmsqlbtbcU+4aJmHGguc0hzC1wPI1B2LJdE8on7P/ACRFr2jAgQnS8v8AEe+QSQK0qATmSBTBS2DK9XBBObu8eGnp7p9XXmj5indcFfp+lp5N2lNqr5pFkkkkBVazCE2e+j6bQjSMUHLyrqg5UNUdECkiLOBOCaE4JiHBJIJIA4U0pxTSgBpTGCruGKcU17rrCdTggDNWk8uiuJGZoOAwCjhyzzkD54K2fFaMyFA+cGgJ9FkenV22LoIGWedTThiiGSbBjSvEqB0247lG55OZqrFjhHhDUEHmM3KoVdbkqYsIhoq5vfH7QajlVccVYWDEvRDXQYef8KnJKacX3Lcc3jmpx5W5V2ZNwpyXbLxYhY5pGRA6xrchUjhUbkY/opLsbUxXtAxqS0U31os90usUy8TrGD+k81/Q4/Dw2KlhxiaDE6AYnyAXNnkUX05YJtbWd3Hp/Vj14MjjGW9eH37/AF8jVWlNibmGQ2VMNmFfm+Z3oAtJClHO0oN/2QnRmyhLw78SgiPFTX4Ro3jtVpFngMhX0C24INJynzL6RydVkg5LHj+GOy9/L/MfClGjPE7/ALJk3NNaKVruCDizDnZnyQc0aNKvsy0DGaJJphimkqOEFK1pOSiMa83mlpxaRQg4ggrH2nJOgPpm0+E/Q71u4Mp83JR2hJ9ZDMO40tO00IOhB2qnNg9WPuuDXo9Y9PL/AKvlf5MVZkq+O8MbxJ0aNpW5l5VsJgY0YDmTqShLIl2y7LgArm41qSd5+ifNxydUtPgWJW+WT12seolUfhX6+7LqxRg87x7I+IwOwPuQqKw3Hq3Y/F9AinvO081ps59B/ZGbPUrvZGbPUqsvnaeZS6w7TzKLHRZdkZs9Smuk2bPUqv6w7TzKa6Idp5osKKh0y2VixpeI50OHFPWMiNzbXMZHhXRITkvKtd1EZ8VzgQG1q2p+I4Zom0bNbMQXhxo5ovMcdDqOBVJYtjuaDEiUqDRoBB1peNPRYpwyKdRW3Z+PP7nVhkwSxuc272uP9zXH8/iHyMG5Da3UYnicVbS0a8N4z+6ATobyDULVFKKSXY5k25tyfcNmoN4VGY9UCFYwogcKjz3KCZl64jzCk0R9jG25IGE6+0dxx/tOzgq9kXTRbqJLB7S1wq0ihqs1C6PEzAh9Y3qz3i+uIHy0+Zc3PpZdVwWz/Q9BovtGDh05XTj38r/f7ktgyHXOvEdxuf5j8q2sOWc7Ic8EVISkKGwNhgUAoNfNTxJljc3BbcGBYo0cnV6p6ifV2XBBDkR8Rr6IlkMNyFEDFtVo8P8AOShiTDnZnlgrrRkplnEjtbmUg8ObUKoVhZ7qtI2H3TTBonCcE0LoTEPCSQSQA0ppTimlADSqy3I2LWDQXj7D6q1bnwWanY1+I52/DgMAkxoiST2QXHIKZkmdTyUCQMnNYTkKo5su0ac0nzDRryToVgZlna4K0sWTAaXYkk+38Kqpmd2DmrWWc4Q2gnThnimqDcLnmtexzHMvtIoRgc1l7FsAQIrolx5of6d5o7jdp2u3q/l4t1244FWii4Rk1JrdE4ZsmOMoRe0uSmiPJOJqmp8xCuuI5cE1jCTQCqZE4hJ2pFAreFIfMfIfdD2ldYAMAKp0Kyul5PbyCNYwDIIJ8+B4RXeVGJ9+7kqXngnRByRYvcRkKoOL1hzBpsCY20HfKDzR0FziO8KedVKOSM+BqVlcWHYeShjK6JQUxMN2+inRKyaxB/SP6j9ES9S2M5hgjLEu90YWQz8qdBZVJK0Mow6epTDIt380UFlcmPVkbPHzFQRLP/N6JUFkMiKtifp+6FjjuHy91YykuWh9SDVv3QjBVMXcAawnIEqZkoTnQIxzgMzRQvm2jLFKh2dgy4bjUqZAvm3aUCNYagHcCmI6VyXjih7jQQcyF2qIlYQcHDXBG4FdHmnnC8QNgw9kKi5yAWnFCKp+5NEkBtXDmjUPKtwJ8kQpRWwCRNnvo+m0IZOhOo4HYVITLU5roXXrgUyA8JJBJADCmlOKaUARTscQ4ZcTSuHNVrC12Iod4xVnHe2mLb1MRWirpm1XtwZCb5k+wCVAP6p2jSUwy8c5NA8wq2Na82crreDa+6BjTE47OM7yut/xARQF9+FRXeJw5kpsSQhs/wCJHa3jQe5WVjWfGf4nvdxc4ocWDuR0odmljTFnt8UwDwN7/EFWUC0JSJ4I7OF4A8jQrE/gR2JfgR2J0Bv+x1FWuBH82IyCCGgHMYLzeFY72GrSWncSPZWMB82zwxn+dHf5VSoGbWNLh5BOnqnVawaALMQLXmxnddxbT2ojGW24+OCDwd9CEP2EGTFqaMHmfss9PxnPeLxqrxk7AdnDI/b9k2IyUzpU7g9ZZ4csnu0Q6WUYRUvIOdicBwx5KxbPQWYshOrwH1KZEt2J8MHm76AJw039wdJJAkrvhaeOqldLxNG18wAquLbM0cgxv7SfcoKNNzjv+qRwa0ewqtCikqRMu3WbFd4i0bqlRRrHaPHGa3kPcrORpSO/xRYh4ud90IbCOxOkOzcWeIIYGMjMdSvxNJxNdCp4km7QhYD8BOxTwLOis8D3t4OI9kUBsjKPGnIppvj5hzWfgzM4zKM4/qDXe4qj4NszQ8TWO8iPYooLLETDvmKa+cft9AomW0T44HJ1fQhTCcgOzY5vkfoUqC0SyEcvv10b90BFdRhpu91YyhgtJuvzFMf9pj4UACjn14H7BMClJSVmYss3JjneTvqU02q1vggc6N9gUukdgDGE5AngKq0l4D7o7pyps90HFtuYPhhsHGrvsgo1ozjsnhv6WN+oKaQmy6i2fEJBFBTejJOXLcSRiKYLGRWzT/FGif3EeyBfYznGpqTtJJPNFCPSI0EPFCFTR7LeD3RUcQsxBk47PDEiDg533RsKanG5RnHiGu9wk4pjTovWSzmgC6Ui2ir4VrzYzuO4tp7FFQ7ci/FBB4OI9wUdI7JUlNDtNjvFCI5FFNEJ2noR7IoOomguvMB3JwShMaBQZJBSIjwkkEkARlNKcU0oAa5qhdLgqdJAA3ZAl2QIhdQAN2QLvZAiEkAD9kCXZAiEkAD9kC72QIhJAA/ZQl2QIhJAA/ZAl2QIlJAA3ZAu9kCISQAP2QJdkCISQAP2QJdkCISQAP2QJdkCISQAP2QJdkCISQAP2QLnZAiUkADdkCXZAiVxAA/ZQl2UIhJAA/ZAl2RqISQAP2QLnZAiUkADdlCXZQiUkADdlCXZQiEkAQCWClZDonrqAEE4LgXQgB4SSCSAP//Z"
                    alt="kk"
                    id="img"
                   
                  />
                </Link>
                </li>
              </ul>
            </div>

            {/*  */}

            <div className="colonna">
              <h5 className="text-uppercase"> Social </h5>

              <ul>
                <li>
                  <a href="#!" className="text-white">
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    Istagram
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    Twitter
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>

      {/*  */}

      <div className=" footer_bottom">
        <span> www.Scarpe.it</span>© {new Date().getFullYear()} Copyright
      </div>
    </div>
  );
};

export default Footer;
