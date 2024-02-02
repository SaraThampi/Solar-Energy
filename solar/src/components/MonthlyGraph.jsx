"use client"
import { useState } from "react"
import React from "react"

export default function MonthlyGraph({daytimeDataMonth, daytimeDataBarWidthMonth, peakMWMonth}) {
    
    return(
        <>
        {/* MONTH CONTAINER */}
        <section className="fixed bottom-0 w-full">
            <div className="graph" key="graph">
                {daytimeDataMonth.reverse().map((dataPoint, index) => (dataPoint[1].includes("09:00:00")) ? (
                <React.Fragment key={`${index}-frag`}>
                <div className="verticalstrip" key={index}>
                <div className="break" key={`${index}-break`}></div>
                    </div>
                <div className="verticalstrip" key={`${index}-strip`} style={{ width: `${daytimeDataBarWidthMonth}%` }}>
                    <div className="w-full bg-green-800 rounded-t-lg bg-gradient-to-b from-green-800 to-green-600" key={`${index}-bar`} style={{ height:  `${98*dataPoint[2]/peakMWMonth}%`  }}></div>
                </div>
                </React.Fragment>
                ) : (
                <div className="verticalstrip" key={`${index}-2`} style={{ width: `${daytimeDataBarWidthMonth}%` }}>
                    <div className="w-full bg-green-800 rounded-t-lg bg-gradient-to-b from-green-800 to-green-600" key={`${index}-bar-2`} style={{ height:  `${98*dataPoint[2]/peakMWMonth}%`  }}></div>
                </div>
                ))}
            </div>
            {/* BASE OF GRAPH */}
            <div className="w-full h-4 bg-green-800  bg-green-700 w-full bg-gradient-to-b from-green-600 to-green-500" key="base"></div>
        </section>
        </>
    )
}