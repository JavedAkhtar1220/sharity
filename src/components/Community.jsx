import React from 'react';
import IconButton from '@mui/material/IconButton';
import { FaInstagram, FaTwitter, FaYoutube, FaTelegram, FaDiscord } from 'react-icons/fa'

const Community = () => {
    return (
        <div className='community-container' id='community'>
            <div className="container">
                <h1 className='fw-bold text-center'>COMMUNITY</h1>

                <div className="row">
                    <div className="col-lg-8 col-md-8 col-sm-10 col-10 mx-auto">
                        <p className='h4 text-center mt-5'>
                            The Saitama community calls itself The Wolfpack (#SaitamaWolfpack). We are a warm, transparent and supportive community, and are currently present in most platforms with moderators in multiple languages who are accessible 24 hours a day, seven days a week. As the project grows, new channels in different languages are being created. You are more than welcome to join us.
                        </p>
                    </div>
                </div>

                <div className='text-center mt-5'>

                    <IconButton aria-label="insta" size="large" href="https://www.instagram.com/sharitytoken/" target={'_blank'}>
                        <FaInstagram fontSize="inherit" />
                    </IconButton>

                    <IconButton aria-label="twitter" size="large" href="https://twitter.com/sharitytoken" target={'_blank'}>
                        <FaTwitter fontSize="inherit" />
                    </IconButton>

                    <IconButton aria-label="youtube" size="large" href="https://www.youtube.com/channel/UC2C8zJXYxVLk_jHf5mQabyA" target={'_blank'}>
                        <FaYoutube fontSize="inherit" />
                    </IconButton>

                    <IconButton aria-label="telegram" size="large" href="https://t.me/+eCJ3wERh5JY2MDAx" target={'_blank'}>
                        <FaTelegram fontSize="inherit" />
                    </IconButton>

                    <IconButton aria-label="telegram" size="large" href="https://discord.gg/bfczSeeVNq" target={'_blank'}>
                        <FaDiscord fontSize="inherit" />
                    </IconButton>


                </div>

            </div>
        </div>
    )
}

export default Community;
