import { useEffect, useState } from "react"
import { Copy } from "lucide-react";

export default function ThirdPage2(){

    const [front,setFront] = useState(false);
    
    useEffect(()=>{

        const interval = setInterval(()=>{
            setFront(!front);
        },3000)
        //what did i do here?
        return () => clearInterval(interval);

    },[front])

    return (
        <div className="h-screen md:max-h-[60vh] w-screen px-[5%] md:px-[16%] py-[4%] bg-black">
            <div className="w-full h-full flex flex-col md:flex-row justify-center items-center gap-6">
                <div className="w-full md:w-1/2 h-full md:p-4 flex flex-col justify-start items-start pt-[20%]">
                    <div className="w-full md:w-[40%] text-[2rem]/10 text-white">Engineered strictly for vibe users</div>
                    <div className="text-lg text-white pt-6 font-semibold">Transparent Execution logs</div>
                    <div className="w-[75%] text-sm text-neutral-500 font-semibold pt-1 pb-[10%]"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat eaque placeat delectus fugiat maxime!</div>
                    <div className="text-[1.4rem] text-white py-[3%] font-light">Explore Reporting tools</div>
                    <div className="w-full h-[2px] bg-gradient-to-r from-purple-600 via-orange-300 to-red-300"></div>
                    <div className="text-[1.4rem] text-white py-[3%] font-light">Lorem ipsum dolor sit amet consectetur.</div>
                    <div className="w-full h-0 border-[1px] border-neutral-600  bg-gradient-to-r from-purple-600 via-orange-300 to-red-300"></div>
                    <div className="text-[1.4rem] text-white py-[3%] font-light">Lorem, ipsum.</div>
                    <div className="w-full h-0 border-[1px] border-neutral-600 bg-gradient-to-r from-purple-600 via-orange-300 to-red-300"></div>
                </div>
                <div className="w-full h-full md:w-1/2 pb-[30%] md:pb-0">
                    <div className="relative h-full md:h-[82%] w-full rounded-xl bg-gradient-to-b from-neutral-900 to-neutral-950 flex justify-end items-end inset-shadow-2xs inset-shadow-neutral-800">
                        <div className={`transition-all delay-100 duration-300 ${front ? "absolute right-0 bottom-0 h-[85%] w-[80%] border-t-2 border-l-2 border-neutral-800 rounded-tl-lg bg-[#13111B] text-white" : "h-[80%] w-[84%] border-1 border-neutral-800 rounded-tl-lg bg-[#13111B] text-white" } `}>
                            <pre  className="relative overflow-hidden w-full h-full p-4 text-[0.8rem]">
                                <Copy className="h-4 w-4 absolute right-4 top-4"/>
                                <code>
{`#include<bits/stdc++.h>
using namespace std;>
void setZeroes(vector<vector<int>>& matrix) {
    int rows = matrix.size();
    int cols = matrix[0].size();
    vector<bool> rowzero(rows,false);
    vector<bool> colzero(cols,false);
    for(int i=0;i<rows;i++){
        for(int j=0;j<cols;j++){
            if(matrix[i][j]==0){
                rowzero[i] = true;
                colzero[j] = true;
            }
        }
    }
int main() {
    vector<vector<int>> matrix = {
        {1, 1, 1},

`}
                                </code>
                            </pre>
                        </div>
                        <div className={`transition-all delay-100 duration-300 ${!front ? "absolute right-0 bottom-0 h-[85%] w-[80%] border-t-2 border-l-2 border-neutral-800 rounded-tl-lg bg-[#13111B] text-red-400" : "h-[80%] w-[84%] border-1 border-neutral-800 rounded-tl-lg bg-[#13111B] text-white-400" } `}> 
                            <pre  className="overflow-hidden w-full h-full p-4 text-[0.8rem]">
                                <code>
{`#include<iostream>
#include<vector>
using namespace std;
void setZeroes(vector<vector<int>>& matrix) {
    int rows = matrix.size();
    int cols = matrix[0].size();
    vector<bool> rowzero(rows,false);
    vector<bool> colzero(cols,false);
    for(int i=0;i<rows;i++){
        for(int j=0;j<cols;j++){
            if(matrix[i][j]==0){
                rowzero[i] = true;
                colzero[j] = true;
            }
        }
    }
int main() {
    vector<vector<int>> matrix = {
        {1, 1, 1},
`}
                                </code>
                            </pre>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}