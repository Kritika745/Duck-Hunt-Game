import React, {useEffect, useState} from 'react'
import appwriteService from "../appwrite/config";
import {Container} from '../components'
import myImage from '../assets/duck3.png'


function Home() {
  
   
        return (
            <div className="w-full bg-green text-center">
                <Container>
                    <div className="flex flex-wrap">
                        <div className=" w-full ">
                            <img className='' src={myImage} />
                        </div>
                    </div>
                </Container>
            </div>
        )
    }

export default Home