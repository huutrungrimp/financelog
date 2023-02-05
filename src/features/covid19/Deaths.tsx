import React, { useEffect, useState } from 'react'
import { getDemographyGraphs, getEpiGraph } from '../assets/data/getData';
import { EpiGraph } from '../../interface';


export default function Deaths() {

  const [epiGraph, setEpiGraph] = useState<EpiGraph[]>([])
  useEffect(() => {
    getEpiGraph().then((res) => {
      setEpiGraph(res)
    })
  }, [])

  useEffect(() => {
    getDemographyGraphs().then((res) => {
    })
  }, [])

  
  return (
    <div>

    </div>
  );

}
